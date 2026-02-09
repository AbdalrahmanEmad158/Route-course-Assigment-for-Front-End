import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'


import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Layout from './componants/Layot/Layout.jsx'
import Blog from './pages/Blog/Blog.jsx'
import BlogDetails from './pages/BlogDetails/BlogDetails.jsx'


function App() {
  let routes = createBrowserRouter([
  {path:'', element:<Layout/>,children:[
    {index:true, element:<Home/>},
    {path:'about', element:<About/>},
    {path:'blog', element:<Blog/>},
    {path:'blog/:id', element:<BlogDetails/>},
    {path:'*', element:<h1>404 Not Found</h1>},
  ]}
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
