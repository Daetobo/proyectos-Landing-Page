import { useLoaderData,Form,redirect, useActionData } from 'react-router-dom';
import { actualizarTarea, obtenerTarea } from '../data/Tareas';
import Formulario from '../components/Formulario';

export async function loader({params}) {
    const tarea = await obtenerTarea(params.tareaId)
    if (Object.values(tarea) === 0) {
        throw new Response('',{
            status: 404,
            statusText:'No se encontro resultados'
        })
    }
    return tarea
}

export async function action({request,params}) {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)

    const error = []
    if (Object.values(datos.responsable) == '') {
        error.push('Por favor asignar un responsable')
    }

    if (error.length) {
        return error
    }

    actualizarTarea(params.tareaId,datos)

    return redirect('/')
}

const EditarTarea = () => {

    const tarea = useLoaderData()
    const errores = useActionData()

    return (
        <>
            <h1 className='font-bold text-4xl font-sans text-amber-400 w-7/12 m-auto'>Editar tarea</h1>
            <p className='mt-3  text-gray-700 mb-4 w-7/12 m-auto'>A continuación podrás modificar los datos de una tarea</p>

            <div className='w-full text-start'>
                {/* {errores?.length && errores.map((error,i)=><Errores key={i}> {error} </Errores> )} */}
                    <Form
                    method='post'
                    noValidate
                    >
                        <Formulario tarea={tarea}/>
                    
                    </Form> 
            </div>

        </>
    );
}

export default EditarTarea;
