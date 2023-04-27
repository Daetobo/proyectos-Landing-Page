import { useNavigate, Form, redirect } from 'react-router-dom'
import iconEditar from '../img/editar.svg'
import iconEliminar from '../img/eliminar.svg'
import { eliminarTarea } from '../data/Tareas';

export async function action({params}) {
    await eliminarTarea(params.tareaId)
    return redirect('/')
}

const Task = ({tarea}) => {

    const navigate = useNavigate()
    const {id,nombre,responsable,estado,fecha,vencimiento,notas,prioridad} = tarea

    return (
        <>
            
            <div 
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-slate-700 mb-5"
                
            >

                <div className='flex justify-end gap-3'>
                    
                    <button className='pb-2'>
                            <img className='w-6 hover:cursor-pointer hover:shadow-lg' src={iconEditar} alt='icono editar' onClick={()=> navigate(`/tarea/${id}/editar`)}/>
                     </button>  
                    <Form
                        method='post'
                        action={`/tarea/${id}/eliminar`}
                        onSubmit={(e)=>{
                        if (!confirm('Desea eliminar la tarea')){
                            e.preventDefault()
                        }
                    }}  
                    >                 
                        <button type='submit'>
                            <img className='w-6 hover:cursor-pointer hover:shadow-lg' src={iconEliminar} alt='icono eliminar'/>
                        </button>
                        
                    </Form>
                </div>

                <h6 className={`mb-2 ${prioridad == 'alta' ? 'bg-red-200 text-red-400' : prioridad == 'media' ? 'bg-amber-100 text-amber-400' : 'bg-green-200 text-green-500' } rounded-3xl  font-bold px-4 inline-block`}>{prioridad}</h6>
                <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white truncate font-mono">{nombre}</h5>
                <p className="text-gray-400">{responsable}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400 truncate">{notas}</p>
                <h6> <span className="font-semibold">vencimiento:</span> {vencimiento}</h6>
            </div>
        </>
    );
}

export default Task;