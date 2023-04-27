import { useState } from 'react'
import { Form, useActionData, redirect, useNavigate } from 'react-router-dom'
import Formulario from '../components/Formulario';
import Errores from '../components/Errores';
import { agregarCliente } from '../data/Tareas';
import Asignacion from '../components/Asignacion';
import iconCerrar from '../img/cerrar.svg'

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

const NuevaTarea = ({setModal}) => {

    const errores = useActionData()
    const navigate = useNavigate()

       
    return (

        <div className='modal mt-14'>
 

            <h1 className='font-bold text-4xl font-sans text-amber-400 w-7/12 m-auto border-b-2 pb-2 text-center'>Nueva tarea</h1>

            {/* <div className='flex justify-end mb-4 w-7/12 m-auto'>
                <button className='bg-gray-500 font-bold text-white px-3 py-1 rounded-md uppercase hover:bg-slate-700'
                 onClick={()=> navigate('/')}
                >
                Volver
                </button>
            </div> */}

                <div className='cerrar-modal'>
                    <button onClick={()=> setModal(false)}>
                        <img className='w-16' src={iconCerrar} alt='cerrar' />
                    </button>
                </div>
                <div className='w-full text-start mt-3'>
                    {errores?.length && errores.map((error,i)=><Errores key={i}> {error} </Errores> )}
                        <Form
                        method='post'
                        noValidate
                        >
                            <Formulario/>
                        
                        </Form> 
                </div>
        </div>
    );
}

export default NuevaTarea;
