
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Content from './pages/Content.Jsx'
import Serveres from './pages/Serveres.jsx'


const router = createBrowserRouter([

  {
    path : '/',
    element: <Layout/>,
    children :[
      {
        path : '/',
        element: <Home/>
      },
      {
        path : 'about',
        element : <About/>
      },
      {
        path: 'content',
        element: <Content/>
      },
      {
        path: 'serveres',
        element: <Serveres/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
  <RouterProvider router ={router} />
)
