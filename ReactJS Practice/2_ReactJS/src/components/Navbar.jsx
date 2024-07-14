import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <ul>
        <li>React Router is a standard library for routing in React. </li>
        <li>It enables the navigation among views of various components in a React application, allows changing the browser URL, and keeps the UI in sync with the URL.</li>
    </ul>
      <nav>
        <Link className='link' to="/home">Home</Link>
        <Link className='link' to="/about">About</Link>
        <Link className='link' to="/contact">Contact</Link>
        <Link className='link' to="/login">Login</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Navbar
