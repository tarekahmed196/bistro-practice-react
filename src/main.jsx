import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Home from './components/Home'
import Menu from './components/Menu'
import { HelmetProvider } from 'react-helmet-async';
import Order from './components/Order'
import TabsItem from './components/TabsItem'
import TabDynamic from './components/TabDynamic'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order',
        element: <Order></Order>
      },
      {
        path: '/tabs',
        element: <TabsItem></TabsItem>,
        loader: ()=> fetch('https://run.mocky.io/v3/3a6885ca-32ba-4799-9aa6-af383e06142a')
      },
      {
        path: 'tab-dynamic/:id',
        element: <TabDynamic></TabDynamic>,
        loader: ({params})=> fetch(`https://run.mocky.io/v3/3a6885ca-32ba-4799-9aa6-af383e06142a/${params.id}`)
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}/>
    </div>
    </HelmetProvider>
  </React.StrictMode>,
)
