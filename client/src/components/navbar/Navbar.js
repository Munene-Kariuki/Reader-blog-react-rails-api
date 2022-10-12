import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 15px 15px",
    textDecoration: "none",
    color: "white",
  };
  
  return (
    <nav>
      <div className='nav-items'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3V0LBQKekq1nVwYglVndw-r9OmLh0J4nwUw&usqp=CAU' alt='logo' className='app-logo' />
        <h2>Reader</h2>
      </div> 
      <div className='links'>
        <NavLink exact to={'/'} style={linkStyles}><strong className='nav-link'>Home</strong></NavLink>
      </div>
    </nav>
  )
}

export default Navbar