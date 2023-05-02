import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Index, { loader as tareasLoader } from './pages/Index'
import NuevaTarea, { action as nuevaTareaAction } from './pages/NuevaTarea'
import EditarTarea, { loader as tareaLoader, action as actualizarTareaAction, action } from './pages/EditarTarea'
import { action as eliminarTareaAction } from './components/Task'
import Asignacion, {loader as tareaAsignacionLoader} from './components/Asignacion'


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Sidebar/>,
      children:[{
        index:true,
        element: <Index />,
        loader: tareasLoader
      },
      {
        path: '/tarea/nueva',
        element: <Asignacion />,
        loader: tareaAsignacionLoader,
        action: nuevaTareaAction
      },
      {
        path: '/tarea/:tareaId/editar',
        element: <EditarTarea />,
        loader: tareaLoader,
        action: actualizarTareaAction
      },
      {
        path:'/tarea/:tareaId/eliminar',
        action: eliminarTareaAction
      }
    ]
    }
  ])

  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
)



