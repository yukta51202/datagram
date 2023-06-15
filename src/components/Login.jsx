import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import log from '../assets/d-logo.png'
import login from '../assets/login.svg'
import girl from '../assets/girl.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';
import { Link } from '@mui/material'

const Login = () => {

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function handleSubmit(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:2000/api/login', {
      method: 'POST',
      headers: {
				'Content-Type': 'application/json',
			},	
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your email and password')
		}
	}

  function handleValidation() {
    const toastOptions = {
      position: 'top-right',
      autoClose: 4000,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    }

    if(email === "" && password === ""){
      toast.error("Details are required!", toastOptions);
      return false;
    }

    else if(password === ""){
      toast.error("Password is required!", toastOptions);
      return false;
    } 

    else if(email === ""){
      toast.error("Email is required!", toastOptions);
      return false;
    }

    return true;
  }

  return (
  <>
    <Container>
      <img src = {login} alt = "login-illustration" width = "550px" class = "log"/>
      <img src = {girl} alt = "girl" width = "125px" class = "girl"/>
      <div class = "reg">
        <div class="card">
            <div class="container">
            <img src = {log} alt = "database" width={300} class = "logo" />
            </div>
            <div>
                <form onSubmit = {(event) => handleSubmit(event)}>
                  <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="email"
                    name='email'
                    placeholder='Email'
                    type="email"
                    fullWidth
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="password"
                    placeholder='Password'
                    type="password"
                    fullWidth
                    name='password'
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                    <Button variant="contained" onClick={handleValidation} type = "submit"> Login </Button>   
                    <Button variant="contained" startIcon={<GoogleIcon />}> Login with Google </Button>          
                </form>
                <div class = "msg">
                      <span> Don't have an account? <Link href = "/Register"> Signup Here. </Link></span>
                </div>  
            </div>
        </div>
      </div>
    </Container>
    <ToastContainer/>
  </>
  )
}

const Container = styled.div`
.msg{
  font-size: 1rem;
  font-weight: 600;
  margin: 40px 0px 20px 0px;
}
.girl{
  position: absolute;
  margin-left: 1000px;
  margin-top: 325px;
}
.log{
  position: absolute;
  margin-top: 275px;
  margin-left: 170px;
  z-index: 1;  
}
.logo{
  margin-top: 30px;
}
.reg{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 255);
  z-index: 2;
}
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 30px; 
    padding: 0.5rem 6rem;
    background-color: rgba(255, 255, 255, 255)
  }
  
  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
   form{
    display : flex;
    flex-direction : column;
    gap : 0.7rem;
    margin-top: 20px;
    margin-bottom: 20px;
    box-sizing: initial; 
    }

    button{
      font-size: 1rem;
      background-color: #e63946;
      color: white;
      margin-top: 1rem;
      padding: 0.5rem 0.5rem;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      &:hover{
        background-color: #d00000;
        color: white;
      }
`

export default Login;