import React from 'react'
import './navbar.css'
import { Link,useNavigate } from "react-router-dom";
import { useAlert } from '../../context/Alertcontext';

const Navbar = ({pagetype}) => {
  const {showalert} =useAlert();
  let navigate = useNavigate();
  var token = localStorage.getItem('token')
  const logoutclickhandler = () =>{
    localStorage.clear();
    showalert("Logged out successfully")
    navigate('/')
  }
  const parentclass = 'navbar-parent ' +  pagetype
  return (
    
      <div className={parentclass}>
          <Link to="/">Home</Link>
          <Link to="/listvideos">Browse Videos</Link>
          <Link to="/likedvideos">Liked Videos</Link>
          <Link to="/playlists">playlists</Link>
          
          <Link to="/watchhistory">History</Link>
          <Link to="/watchlater">Watch Later</Link>
          
          { token?<Link onClick={()=>logoutclickhandler()} to="/">Logout</Link>:<><Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link></> }
      </div>
   
    
  )
}

export default Navbar