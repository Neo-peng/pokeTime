import React from 'react'
import {NavLink, Link, withRouter} from "react-router-dom"

function Navbar(props) {
  console.log(props)
  
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a href="/" className="brand-logo">Poke' Times</a>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
 
// withRouter 会把props 传递给Navbar， super charge
export default withRouter(Navbar)