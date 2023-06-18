// npm modules
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// css
import '../NavBar/NavBar.css'

function NavBar() {
  return (
    <div className="nav">
      <a href="/portfolio">portfolio</a>
      <a href="/portfolio">about me</a>
      <a href="/portfolio">contact me</a>
    </div>
  )
}

export default NavBar
