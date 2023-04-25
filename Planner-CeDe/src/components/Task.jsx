import { useNavigate } from 'react-router-dom'

const Task = ({tarea}) => {

    const navigate = useNavigate()
    const {id,nombre,responsable,estado,fecha,vencimiento,notas,prioridad} = tarea

    return (
        <>
            <div 
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer mb-2"
                onClick={()=> navigate(`/tarea/${id}/editar`)}
            >
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