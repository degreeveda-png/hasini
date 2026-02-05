import React from 'react'
import '../components/nav.css'
const Nav = () => {
  return (
    <nav className="nav">
        <h2>Delicious Bites</h2>
        <ul>
            <li> <a href="#menu">Menu </a></li>
            <li> <a href="#about">About</a></li>
            <li> <a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Nav
