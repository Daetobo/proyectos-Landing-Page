
const Formulario = ({tarea}) => {

    return (
        <div className='w-7/12 m-auto'>

            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="nombre">
                        Nombre tarea
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="nombre" type="text" name='nombre' defaultValue={tarea?.nombre} />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="responsable">
                        Responsable
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="responsable" type="text" name='responsable' placeholder="Jane" defaultValue={tarea?.responsable}/>
                </div>
            </div>
            
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="fecha">
                        Fecha inicial
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="fecha" type="date" name='fecha' defaultValue={tarea?.fecha}/>
                </div>
                
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="vencimiento">
                        Vencimiento
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="vencimiento" type="date" name='vencimiento' defaultValue={tarea?.vencimiento}/>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="Prioridad">
                        Prioridad
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Prioridad" name='prioridad' defaultValue={tarea?.prioridad}>
                            <option>alta</option>
                            <option>media</option>
                            <option>baja</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full md:w-2/3 px-3">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="notas">
                        Notas
                    </label>
                    <textarea className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-1 focus:outline-none focus:bg-white focus:border-gray-500 overflow-scroll-y" id="notas" name='notas' defaultValue={tarea?.notas}></textarea>
                    <p className="text-white text-xs italic">Ingresa las notas de tus tarea</p>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="estado">
                        Estado
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="estado" name='estado' defaultValue={tarea?.estado}>
                            <option>Sin iniciar</option>
                            <option>Pendiente</option>
                            <option>Finalizada</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <input
             className='bg-amber-400 py-2 w-full rounded-lg font-bold text-white text-lg hover:cursor-pointer uppercase'
             type='submit'
             value={`${tarea?.responsable ? 'Editar tarea' : 'Registrar tarea'} `}
            />
        </div>
    );
}

export default Formulario;
