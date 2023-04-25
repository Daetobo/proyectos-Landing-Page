import { useLoaderData } from 'react-router-dom';
import { obtenerTareas } from '../data/Tareas';
import Tablero from '../components/Tablero';


export function loader() {
    const tareas = obtenerTareas()
    return tareas
}

const Index = () => {

    const tareas = useLoaderData()

    return (
        <>

            <h1 className='font-bold text-4xl font-sans text-amber-400 ml-2'>Tareas</h1>
            <p className='mt-3 ml-3 text-gray-700 mb-8'>Administra las tareas</p>
            <div>
                {<Tablero tareas={tareas}/>}
            </div>
            

        </>
    );
}

export default Index;
