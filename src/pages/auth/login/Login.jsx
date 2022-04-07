import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { useNavigate  } from 'react-router-dom'
import './login.css'
import Navbar from '../../../components/navbar/Navbar'
import Alert from '../../../components/alert/Alert'
import { useAlert } from '../../../context/Alertcontext'
const Login = () => {
  let navigate = useNavigate();
  const {showalert,alertstatus,alertmessage} = useAlert();
  const [email , setemail ] = useState("adarshbalika@gmail.com")
  const [password , setpassword ] = useState("adarshBalika123")
  const [disabled , setdisabled] = useState(false)

  const loginHandler = () =>{
    setdisabled(true)
    const bodydata = {
      "email":email,
      "password":password
      
    } 

    axios.post('/api/auth/login',bodydata)
    .then((response)=>{
      localStorage.setItem('token',response.data.encodedToken)
      
      showalert('Logged in successfully')
      navigate('/Listvideos')
    },
    (error)=>{
      console.log('error from login page');
      showalert('Error logging in')
    })
  }
  return (
    <div >
      <Navbar pagetype="not-home"/>
      { alertstatus && <Alert message={alertmessage}/>}
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
              <input onChange={(e)=>setemail(e.target.value)} type="email" name="" id="email" placeholder='adarshbalika@gmail.com' />
            </div>
            <div className="input-auth">
              Password
              <input onChange={(e)=>setpassword(e.target.value)} type="password" name="" id="password" placeholder='adarshbalika' />
            </div>
            <div className="auth-btn-section">
              <button disabled={disabled} onClick={()=>loginHandler()} className='auth-btn'>Login</button>
              <button disabled={disabled} onClick={()=>loginHandler()} className='auth-btn'>default</button>
            </div>
            
          </div>
          <div className="hr-div-long top-gap"></div>
        </div>
      </div>
    </div>
  )
}

export default Login