import { useLoaderData,redirect, useNavigate } from 'react-router-dom'
import  {  CircularProgressbar, buildStyles  }  from  'react-circular-progressbar' ; 
import  'react-circular-progressbar/dist/styles.css';
import { useState, useEffect } from 'react';
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
    const [asignado, setAsignado] = useState(0);
    const [totalTask, setTotalTask] = useState(0);
    const [capacidadDisponible, setCapacidadDisponible] = useState(0);
    const [capacidadI, setCapacidadI] = useState(4800);
    const [responsable, setResponsable] = useState('');
    const [sprint, setSprint] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        const filterRes = tareas.filter(tarea => tarea.responsable === responsable & tarea.sprint === sprint)
        const totalAsignado = filterRes.reduce((total,tarea) => parseInt(tarea.tiempo) + parseInt(total),0)
        const capacidad = capacidadI - totalAsignado
        const numeroTareas = filterRes.length
        const nuevoPorcentaje = (((capacidadI - capacidad) / capacidadI) * 100).toFixed(2)
        setAsignado(totalAsignado)
        setPorcentaje(nuevoPorcentaje)
        setCapacidadDisponible(capacidad)
        setTotalTask(numeroTareas)

    }, [tareas, responsable, sprint]);


    const handleResponsable = (res,sprint) => {
        setResponsable(res)
        setSprint(sprint)
    }


    return (
        <div className={`bg-gray-600 mr-5 h-80 rounded-lg  top-0 left-0 right-0`}>

            <h1 className='text-center font-bold text-4xl uppercase mb-8 text-white pt-8'>Asignación de Tareas</h1>

            <div className='flex justify-around items-center contenedor bg-white rounded-lg w-4/5  m-auto shadow-xl'>
                <div className='p-8 ml-10'>
                    <CircularProgressbar
                        value={porcentaje}
                        text={`${porcentaje} % Asignado`}
                        styles={buildStyles({
                            pathColor: porcentaje > 100 ? '#DC2626' : 'rgb(251 191 36)',
                            trailColor: '#F5F5F5',
                            textColor: porcentaje > 100 ? '#DC2626' : 'rgb(55 65 81)',
                            textSize: '10px'
                        })}
                    />
                </div>
                <div className='mr-20'>
                    <p className='text-gray-700 font-bold text-2xl mb-2'>Capacidad sprint: <span className='font-normal'> {capacidadI} Min</span> </p>
                    <p className='text-gray-700 font-bold text-2xl mb-2'>Total tareas: <span className='font-normal'> {totalTask} </span> </p>
                    <p className='text-gray-700 font-bold text-2xl mb-2'>Disponible: <span className='font-normal'> {capacidadDisponible} Min </span></p>
                    <p className='text-gray-700 font-bold text-2xl'>Asignación: <span className='font-normal'> {asignado} </span></p>
                </div>
            </div>

            <div className='fixed right-10'>
                <button onClick={()=>{
                    setModal(true)
                }}>
                    <img className='w-20' src={iconAdd} alt='agregar'/>
                </button>
            </div>

            <div className='shadow-xl w-4/5 rounded-lg  m-auto h-24 bg-gray-100 border-t-1 mt-10'>
                <FiltrosAsignacion handleResponsable={handleResponsable}/>
            </div>
            
            {modal && 
                
                <NuevaTarea setModal={setModal}
                            modal={modal}
                />
            }

            <div>
                <h1 className='text-white'>espaciado</h1>
            </div>

        </div>
    );
}

export default Asignacion;
