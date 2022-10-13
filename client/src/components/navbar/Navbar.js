import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar({setUser}) {
  const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 15px 15px",
    textDecoration: "none",
    color: "black",
  };

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <nav>
      <div className='nav-items'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3V0LBQKekq1nVwYglVndw-r9OmLh0J4nwUw&usqp=CAU' alt='logo' className='app-logo' />
        <h1>Reader</h1>
      </div> 
      <div className='links'>
        <NavLink exact to={'/'} style={linkStyles}><strong className='nav-link'>Home</strong></NavLink>
        <NavLink exact to={'/stories'} style={linkStyles}><strong className='nav-link'>Stories</strong></NavLink>
        <NavLink exact to={'/write'} style={linkStyles}><strong className='nav-link'>Write</strong></NavLink>
      </div>
      <button onClick={handleLogout} className='logout-btn' >Log out</button>
    </nav>
  )
}

export default Navbar