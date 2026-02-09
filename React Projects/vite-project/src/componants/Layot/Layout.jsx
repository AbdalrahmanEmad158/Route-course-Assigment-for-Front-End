import React from 'react'
import Navbar from '../../componants/Navbar.jsx'
import Footer from '../../componants/Footer.jsx'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
