import { Form, useActionData, redirect, useNavigate } from 'react-router-dom'
import Formulario from '../components/Formulario';
import Errores from '../components/Errores';
import { agregarCliente } from '../data/Tareas';

export async function action({request}) {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)

    const error = []
    if (Object.values(datos.responsable) == '') {
        error.push('Por favor asignar un responsable')
    }

    if (error.length) {
        return error
    }

    agregarCliente(datos)

    return redirect('/')
}

const NuevaTarea = () => {

    const errores = useActionData()
    const navigate = useNavigate()

    return (
        <>

            <h1 className='font-bold text-4xl font-sans text-amber-400 w-7/12 m-auto'>Nueva tarea</h1>
            <p className='mt-3  text-gray-700 mb-4 w-7/12 m-auto'>Registra las nuevas tareas</p>
            <div className='flex justify-end mb-4 w-7/12 m-auto'>
                <button className='bg-gray-500 font-bold text-white px-3 py-1 rounded-md uppercase hover:bg-slate-700'
                 onClick={()=> navigate('/')}
                >
                Volver
                </button>
            </div>
            <div className='w-full text-start'>
                {errores?.length && errores.map((error,i)=><Errores key={i}> {error} </Errores> )}
                    <Form
                    method='post'
                    noValidate
                    >
                        <Formulario/>
                    
                    </Form> 
            </div>
            
        </>
    );
}

export default NuevaTarea;
