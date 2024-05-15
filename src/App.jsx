import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Contact from './Components/Contact'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Login from './Components/Login'
import Registration from './Components/Registration'
import Layout from './Layout'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      // {
      //   path:'about',
      //   element:<About/>
      // },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'login',
        element:<Login/>
      },
      // {
      //   path:'content',
      //   element:<Content/>
      // },
      {
        path:'registration',
        element:<Registration/>
      },
      {
        path:'dashboard',
        element:<Dashboard/>
      }
      
      
    ]
  }
])

function App() {

  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router}/>
      </React.StrictMode>
    </>
  )
}

export default App
