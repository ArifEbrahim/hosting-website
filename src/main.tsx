import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Packages from './pages/Packages'
import Customers from './pages/Customers'
import Hosting from './pages/Hosting'
import UI from './components/ui'
import './main.css'

const router = createBrowserRouter([
  {
    element: <UI />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/packages',
        element: <Packages />
      },
      {
        path: '/customers',
        element: <Customers />
      },
      {
        path: '/hosting',
        element: <Hosting />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
