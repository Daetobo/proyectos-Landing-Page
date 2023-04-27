import React from 'react';
import Task from './Task'

const Columna = ({tareas}) => {

    // const {id,nombre,responsable,estado,fecha,vencimiento,notas,prioridad} = tareas
    console.log(tareas)
    return (
        <div className="w-1/3 p-4">
            
                {
                    tareas.map( tarea => (
                    <Task
                    tarea={tarea}
                    key={tarea.id}
                    />
                ))
                }
            
        </div>
    );
}


const Tablero = ({tareas}) => {

    const sinIniciar = tareas.filter((task) => task.estado == 'Sin iniciar')
    const pendinete = tareas.filter((task) => task.estado == 'Pendiente')
    const finalizada = tareas.filter((task) => task.estado == 'Finalizada')

    return (
        
        <>
            <div className='flex'>
                <Columna tareas={sinIniciar} />
                <Columna tareas={pendinete} />
                <Columna tareas={finalizada} />
            </div>

        </>

    );
}

export default Tablero;
