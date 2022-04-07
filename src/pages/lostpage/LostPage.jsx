import React from 'react'
import { useNavigate } from 'react-router-dom'


import './lostpage.css'
import lostimg from '../../assets/images/lostimage.jpg'
import Navbar from '../../components/navbar/Navbar'
const LostPage = () => {
    let navigate = useNavigate();
  return (
    <div className='lost-page-parent'>
        <Navbar pagetype="not-home"/>
        <div className='lost-page'>
            <h3>Invalid link : Error 404</h3>
            <img src={lostimg} alt="" />
            <button onClick={()=>navigate('/listvideos')} className='auth-btn'>Watch videos</button>
        
        </div>
    </div>
  )
}

export default LostPage