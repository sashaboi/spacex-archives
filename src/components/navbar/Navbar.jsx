import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

const Navbar = ({pagetype}) => {
  
  
  const parentclass = 'navbar-parent ' +  pagetype
  return (
    
      <div className={parentclass}>
          <Link to="/">Home</Link>
          <Link to="/listvideos">Browse Videos</Link>
          <Link to="/likedvideos">likedvideos</Link>
          <Link to="/playlists">playlists</Link>
          
          <Link to="/watchhistory">watchhistory</Link>
          <Link to="/watchlater">watchlater</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
      </div>
   
    
  )
}

export default Navbar