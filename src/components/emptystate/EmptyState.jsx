import React from 'react'
import { useNavigate } from 'react-router-dom'
import './emptystate.css'
import khaliimg from '../../assets/images/khali.jpg'
const EmptyState = () => {
    let navigate = useNavigate();
  return (
    <div className='empty-list'>
        <h3>This list is Empty !</h3>
        <img src={khaliimg} alt="" />
        <button onClick={()=>navigate('/listvideos')} className='auth-btn'>Watch videos</button>
    </div>
  )
}

export default EmptyState