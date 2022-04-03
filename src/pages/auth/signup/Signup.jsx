import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom'


import Navbar from '../../../components/navbar/Navbar'

const Signup = () => {
  let navigate = useNavigate();
  const [email , setemail ] = useState("onkarcool123@gmail.com")
  const [password , setpassword ] = useState("OnkarDeshpande")
  const [disabled , setdisabled] = useState(false)

  const SignupHandler = () =>{
    setdisabled(true)
    const bodydata = {
      "email":email,
      "password":password,
      "firstname":"Onkar",
      "lastname":"Deshpande"
    } 

    axios.post('/api/auth/signup',bodydata)
    .then((response)=>{
      localStorage.setItem('token',response.data.encodedToken)
      console.log('signed up successfully');
      navigate('/Listvideos')
    },
    (error)=>{
      console.log('error from signup');
    })
  }

  return (
    <div>
      <Navbar pagetype="not-home"/>
    <div className='auth-parent'>
      <div className='auth-container'>
        <div className='login-title-section'>
          <div className='grid-title'>
            SIGNUP
          </div>
          <div className="hr-div-long"></div>
        </div>
        <div className="login-inputs-section ">
          <div className="input-auth">
            Email
            <input onChange={(e)=>setemail(e.target.value)} type="email" name="" id="email" placeholder='adarshbalika@gmail.com' />
          </div>
          <div className="input-auth">
            Password
            <input onChange={(e)=>setpassword(e.target.value)} type="password" name="" id="password" placeholder='adarshbalika' />
          </div>
          <div className="auth-btn-section">
            <button disabled={disabled} onClick={()=>SignupHandler()} className='auth-btn'>Signup</button>
            <button disabled={disabled} onClick={()=>SignupHandler()} className='auth-btn'>default</button>
          </div>
          
        </div>
        <div className="hr-div-long top-gap"></div>
      </div>
    </div>
  </div>
  )
}

export default Signup