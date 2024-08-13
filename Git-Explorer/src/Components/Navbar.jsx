/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="flex flex-wrap justify-center bg-black-200 mb-10" >
    <li>Home</li>
    <li>Contact</li>
    <li>About Us</li>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar