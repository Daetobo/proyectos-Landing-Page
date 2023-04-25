import { useState } from "react";
import { Outlet, useLocation, Link } from 'react-router-dom'

const Sidebar = () => {
    
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <div>
            <div className='bg-white py-3 fixed top-0 left-0 right-0 shadow-md'>
            
                <button className='ml-4' onClick={()=>setOpen(true)} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                
                <div className={ ` ${open ? 'w-72': 'w-0'} bg-white fixed min-h-screen top-0 left-0 shadow-md  transition-all duration-500`}>
                    <div className= {`${!open && 'hidden'} pt-3`}>
                        <div className='flex ml-3 justify-between'>
                            <h2 className='px-2 font-bold text-gray-600'>MENU</h2>
                            <button
                                className='text-gray-600 hover:bg-gray-600/10 p-1 hover:rounded-md hover:text-gray-900 mr-3'
                                onClick={()=> setOpen(false)}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <nav className='mt-3'>
                            <Link
                            className={`${location.pathname === '/' ? 'bg-gray-100 rounded-lg' : 'bg-white'} block px-8 py-3 text-lg text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-lg`}
                            to='/'>
                                Tareas
                            </Link>
                            <Link
                            className={`${location.pathname == '/tarea/nueva' ? 'bg-gray-100 rounded-lg' : 'bg-white' } block px-8 py-3 text-lg text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-lg`}
                            to='/tarea/nueva'>
                                Nueva Tarea
                            </Link>
                            <Link
                            className='block px-8 py-3 text-lg text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-lg'>
                                Dashboard
                            </Link>
                        </nav>
                    </div>
                </div>   
            </div>
            <main className={`${open ? 'ml-80 mr-3' : 'ml-5' } mt-20 top-0 left-0 right-0 transition-all duration-500 `}>

                <Outlet/>
            </main> 
        </div>       
         
    );
}

export default Sidebar;
