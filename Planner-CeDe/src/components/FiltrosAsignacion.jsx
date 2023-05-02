import React, { useState } from 'react';
import iconFilter from '../img/filter.svg'


const FiltrosAsignacion = ({handleResponsable}) => {

    const [sprint, setSprint] = useState('');
    const [filterRes, setFilterRes] = useState('');
    const [responsables, setResponsables] = useState([
        'Catalina Granados Orozco','Daniel Escobar Tobon', 'Erika Maria Olarte Vinasco', 'Hugo Leon Ruiz Ruiz',
        'Juan Diego Urrego Gutierrez', 'Maria Jaramillo Giraldo', 'Sorayda Amparo Agudelo Lopez', 'Yeidy Zapata Valencia', 'Yuliana Vargas Lopez'
    ]);

    const onSelectionFilters = (e) => {
        e.preventDefault();
        handleResponsable(filterRes,sprint);
    };

    return (

        <>
            <form className=''>
                <div className='flex w-4/5 h-24 m-auto justify-center items-center gap-4'>
                    <label className='text-gray-600 font-bold text-xl w-1/3'>Filtrar Responsable</label>
                    <select
                        className='w-1/3 bg-gray-200 rounded-lg py-2'
                        onChange={(e)=>setFilterRes(e.target.value)}
                    >
                        <option className='text-center' value=''> -- Responsables -- </option>
                        {responsables.map((responsable,key) =>(
                            <option key={key} value={responsable}>{responsable}</option>
                        ))
                        
                        }
                    </select>
                    <label className='text-gray-600 font-bold text-xl'>sprint</label>
                    <input className='border-gray-700 border-2 w-12 text-center text-gray-700' type='text' value={sprint}  onChange={(e)=>setSprint(e.target.value)} />

                    <button type='submit'>
                        <img className='w-8' src={iconFilter} alt='filter' onClick={onSelectionFilters}/>
                    </button>
                </div>

            </form>
        </>

    );
}

export default FiltrosAsignacion;
