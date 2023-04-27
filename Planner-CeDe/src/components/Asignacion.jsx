import { useLoaderData } from 'react-router-dom'
import  {  CircularProgressbar, buildStyles  }  from  'react-circular-progressbar' ; 
import  'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';
import iconAdd from '../img/iconAdd.svg'
import NuevaTarea from '../pages/NuevaTarea';
import FiltrosAsignacion from './FiltrosAsignacion';
import { obtenerTareas } from '../data/Tareas';

export async function loader() {
    const tareas = obtenerTareas()
    return tareas
}

const Asignacion = () => {

    const tareas = useLoaderData()
    const [modal, setModal] = useState(false);
    const [porcentaje, setPorcentaje] = useState(0);
    const [totalTask, setTotalTask] = useState(0);
    const [capacidadI, setCapacidadI] = useState(480);
    const [filter, setFilter] = useState('');


    const handleResponsable = (res) => {
        const filterResponsable = tareas.filter(tarea => tarea.responsable === res)
        console.log(filterResponsable.length)
    }

    return (
        <div className={`bg-gray-600 mr-5 h-80 rounded-lg  top-0 left-0 right-0`}>

            <h1 className='text-center font-bold text-4xl uppercase mb-8 text-white pt-8'>Asignación de Tareas</h1>

            <div className='flex justify-around items-center contenedor bg-white rounded-lg w-4/5  m-auto shadow-xl'>
                <div className='p-3'>
                    <CircularProgressbar
                        value={porcentaje}
                        text={`${porcentaje} % Asignado`}
                        styles={buildStyles({
                            pathColor: porcentaje > 100 ? '#DC2626' : 'rgb(251 191 36)',
                            trailColor: '#F5F5F5',
                            textColor: porcentaje > 100 ? '#DC2626' : 'rgb(251 191 36)',
                            textSize: '10px'
                        })}
                    />
                </div>
                <div className='mt-10'>
                    <p>Capacidad: {capacidadI} </p>
                    <p>Total tareas:</p>
                    <p>capacidad Disponible:</p>
                </div>
            </div>

            <div className='flex justify-end'>
                <button onClick={()=> setModal(true)}>
                    <img className='w-20' src={iconAdd} alt='agregar'/>
                </button>
            </div>

            <div className='shadow-xl w-4/5 rounded-lg  m-auto h-24 bg-gray-50'>
                <FiltrosAsignacion handleResponsable={handleResponsable}/>
            </div>
            
            {modal && 
                
                <NuevaTarea setModal={setModal}/>
            }



        </div>
    );
}

export default Asignacion;
