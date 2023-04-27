import React, { useState } from 'react';

const FiltrosAsignacion = ({handleResponsable}) => {

    // const {handleResponsable} = handleResponsable
    const onSelectionResponsable = (event) => {
        handleResponsable(event.target.value);
      };
    const [responsables, setResponsables] = useState([
        'Catalina Granados Orozco','Daniel Escobar Tobon', 'Erika Maria Olarte Vinasco', 'Hugo Leon Ruiz Ruiz',
        'Juan Diego Urrego Gutierrez', 'Maria Jaramillo Giraldo', 'Sorayda Amparo Agudelo Lopez', 'Yeidy Zapata Valencia', 'Yuliana Vargas Lopez'
    ]);

    return (

        <>
            <form className=''>
                <div className='flex w-4/5 h-24 m-auto justify-center items-center gap-4'>
                    <label className='text-gray-600 font-bold text-3xl w-1/2'>Filtrar Responsable</label>
                    <select
                        className='w-1/2 bg-gray-200 rounded-lg py-2'
                        onChange={onSelectionResponsable}
                    >
                        <option className='text-center' value=''> -- Responsables -- </option>
                        {responsables.map((responsable,key) =>(
                            <option key={key} value={responsable}>{responsable}</option>
                        ))
                        
                        }
                    </select>
                </div>
            </form>
        </>

    );
}

export default FiltrosAsignacion;
