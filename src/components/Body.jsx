import React from 'react'
import Login from './Login.jsx'
import Browse from './Browse.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:(
            <Login></Login>
        )
        },
        {
            path:"/browse",
            element:<Browse></Browse>
        }
    ])

  return (
    <div className=''>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body