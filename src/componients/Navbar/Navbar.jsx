// import React, { useEffect, useState } from 'react'

import { Link, NavLink } from "react-router-dom";

import NavStyle from './Navbar.module.css'
export default function Navbar() {
    // const [count, setcount] = useState(0)
    // useEffect(()=>{
        
    // },[])
  return <>
  <nav className=" bg-section-color py-6">
    <div className="container mx-auto">
  <div className="flex NavRow justify-between items-center">
    <div className="navbrand me-4">
      <Link to='' className={`${NavStyle.logo} uppercase py-1 font-bold`}>Start Framework</Link>
    </div>
  <div className="navbar-nav">
  <ul className="flex gap-2 text-white">
    <li><NavLink to='About' className={`uppercase ${NavStyle.nav_link}`}>About</NavLink></li>
    <li><NavLink to='Portfolio' className={`uppercase ${NavStyle.nav_link}`}>Portfolio</NavLink></li>
    <li><NavLink to='Contact' className={`uppercase ${NavStyle.nav_link}`}>Contact</NavLink></li>
  </ul>
  </div>
  </div>
    </div>
  </nav>
  </>
}
