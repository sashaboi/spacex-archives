import React from 'react'


import './login.css'
import Navbar from '../../../components/navbar/Navbar'

const Login = () => {
  return (
    <div >
      <Navbar pagetype="not-home"/>
      <div className='auth-parent'>
        <div className='auth-container'>
          <div className='login-title-section'>
            <div className='grid-title'>
              LOGIN
            </div>
            <div className="hr-div-long"></div>
          </div>
          <div className="login-inputs-section ">
            <div className="input-auth">
              Email
              <input type="email" name="" id="email" placeholder='adarshbalika@gmail.com' />
            </div>
            <div className="input-auth">
              Password
              <input type="password" name="" id="password" placeholder='adarshbalika' />
            </div>
            <div className="auth-btn-section">
              <button className='auth-btn'>Login</button>
              <button className='auth-btn'>default</button>
            </div>
            
          </div>
          <div className="hr-div-long top-gap"></div>
        </div>
      </div>
    </div>
  )
}

export default Login