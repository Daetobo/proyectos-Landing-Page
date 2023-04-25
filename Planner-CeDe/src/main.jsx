import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Index, { loader as tareasLoader } from './pages/Index'
import NuevaTarea, { action as nuevaTareaAction } from './pages/NuevaTarea'
import EditarTarea, { loader as tareaLoader, action as actualizarTareaAction } from './pages/EditarTarea'

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
      element: <NuevaTarea/>,
      action: nuevaTareaAction
    },
    {
      path: '/tarea/:tareaId/editar',
      element: <EditarTarea />,
      loader: tareaLoader,
      action: actualizarTareaAction
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
