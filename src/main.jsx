import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayoutes from './mainLayoutes/MainLayoutes.jsx'
import HomePage from './pages/homePage/HomePage.jsx'


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayoutes></MainLayoutes>,
      children:[
        {
          path: "/",
          element: <HomePage></HomePage>,
        }
      ]
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
