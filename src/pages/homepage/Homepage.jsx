import React from 'react'
import { Link } from "react-router-dom";



import bannerimage from '../../assets/images/spacex-banner.jpg'
import logo from '../../assets/images/logo.png'
import '../homepage/homepage.css'
import Navbar from '../../components/navbar/Navbar';
import { useAlert } from '../../context/Alertcontext';
import Alert from '../../components/alert/Alert';

const Homepage = () => {

  const {alertstatus,alertmessage } =useAlert();
  return (
    <div className='homepage-parent'>
      { alertstatus && <Alert message={alertmessage}/>}
        <Navbar pagetype={"home"} />
        { alertstatus && <Alert message={alertmessage}/>}
        <img className='backgroundimage' src={bannerimage} alt="" />
        <div className="homepage-items">
        <img className='logo-img' src={logo} alt="" />
        <div className='homepage-tag'>Reaching for the stars </div>
        <Link to="/listvideos"><button className='homepage-cta'>Video archive</button></Link>
        </div>
        
        
    </div>
    
  )
}

export default Homepage