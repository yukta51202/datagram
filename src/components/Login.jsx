import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import log from '../assets/d-logo.png'
import login from '../assets/login.svg'
import girl from '../assets/girl.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from '@mui/material'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(event) {
		event.preventDefault()

    if (!handleValidation()) {
      return;
    }

    setIsLoading(true);

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
			toast.success('Login successful');
			window.location.href = '/dashboard'
		} else {
			toast.error('Please check your email and password');
		}

    setIsLoading(false);
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

    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      toast.error("Please enter a valid email address.", toastOptions);
      return false;
    }

    return true;
  }

  const responseMessage = (response) => {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setIsLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  function validateEmail(email) {
    // Email validation logic here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]/;
    return emailRegex.test(email);
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
                    margin="dense"
                    id="password"
                    placeholder='Password'
                    type="password"
                    fullWidth
                    name='password'
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                    <Button variant="contained" onClick={handleValidation} type = "submit" > {isLoading ? 'Loading...' : 'Login'} </Button>   
                    <GoogleLogin clientId = "76980875004-athtb4flj9csd91tro9sdl3g475o2ha6.apps.googleusercontent.com" width = "350" onSuccess={responseMessage} onError={errorMessage} />       
                </form>
                <div class = "msg">
                      <span> Don't have an account? <Link href = "/Register"> Signup Here. </Link></span>
                </div>  
            </div>
        </div>
      </div>
    </Container>
    {isLoading && (
        <Overlay>
          <PageLoader>
            <div className="center" />
            {[...Array(8)].map((_, index) => (
              <div key={index} className={`item item-${index + 1}`} />
            ))}
          </PageLoader>
        </Overlay>
      )}
    <ToastContainer/>
  </>
  )
}

const Container = styled.div`
.msg{
  font-size: 1rem;
  font-weight: 600;
  margin: 40px 0px 20px 0px;
  font-family: "Raleway";
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
  font-family: "Raleway"
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
    font-family: "Raleway"
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
    font-family: "Raleway"
    box-sizing: initial; 
    }

    button{
      font-size: 1rem;
      background-color: #e63946;
      color: white;
      margin-top: 1rem;
      font-family: "Montserrat"
      padding: 0.5rem 0.5rem;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      &:hover{
        background-color: #d00000;
        color: white;
      }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 1);
  z-index: 9999;
`;

const PageLoader = styled.div`
position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9); 
  border-radius: 5px; 
  z-index: 10000;

  .center {
    width: 40px;
    height: 40px;
    background: hsl(0, 80%, 50%);
    border-radius: 50%;
    animation: center 3.2s ease-in-out infinite;
  }

  .item {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 15px;
    left: 0;
    right: 0;
    margin: auto;
    background: hsl(0, 80%, 50%);
    border-radius: 50%;
  }

  .item-1 {
    animation: anim-1 3.2s ease-in-out infinite 0s;
    animation-fill-mode: backwards;
  }

  .item-2 {
    animation: anim-2 3.2s ease-in-out infinite 0.2s;
    animation-fill-mode: backwards;
  }

  .item-3 {
    animation: anim-3 3.2s ease-in-out infinite 0.4s;
    animation-fill-mode: backwards;
  }

  .item-4 {
    animation: anim-4 3.2s ease-in-out infinite 0.6s;
    animation-fill-mode: backwards;
  }

  .item-5 {
    animation: anim-5 3.2s ease-in-out infinite 0.8s;
    animation-fill-mode: backwards;
  }

  .item-6 {
    animation: anim-6 3.2s ease-in-out infinite 1s;
    animation-fill-mode: backwards;
  }

  .item-7 {
    animation: anim-7 3.2s ease-in-out infinite 1.2s;
    animation-fill-mode: backwards;
  }

  .item-8 {
    animation: anim-8 3.2s ease-in-out infinite 1.4s;
    animation-fill-mode: backwards;
  }

  @keyframes anim-1 {
    0%, 60%, 100% {
      transform: rotate(0deg) translateX(40px) scale(1);
    }
    10%, 50% {
      transform: rotate(0deg) translateX(0) scale(1.5);
    }
  }

  @keyframes anim-2 {
    0%, 60%, 100% {
      transform: rotate(45deg) translateX(40px) scale(1);
    }
    10%, 50% {
      transform: rotate(45deg) translateX(0) scale(1.5);
    }
  }

  @keyframes anim-3 {
    0%, 60%, 100% {
      transform: rotate(90deg) translateX(40px) scale(1);
    }
    10%, 50% {
      transform: rotate(90deg) translateX(0) scale(1.5);
    }
  }

  @keyframes anim-4 {
    0%, 60%, 100% {
      transform: rotate(135deg) translateX(40px) scale(1);
    }
    10%, 50% {
      transform: rotate(135deg) translateX(0) scale(1.5);
    }
  }

  @keyframes anim-5 {
     0%, 60%, 100% {
      transform: rotate(180deg) translateX(40px) scale(1);
    }
    10%, 50% {
      transform: rotate(180deg) translateX(0) scale(1.5);
    }
  }

  @keyframes anim-6 {
    0%, 60%, 100% {
      transform: rotate(225deg) translateX(40px) scale(1);
    }
    10%, 50% {
      transform: rotate(225deg) translateX(0) scale(1.5);
    }
  }

  @keyframes anim-7 {
    0%, 60%, 100% {
      transform: rotate(270deg) translateX(40px) scale(1);
    }
    10%, 50% {
      transform: rotate(270deg) translateX(0) scale(1.5);
    }
  }

  @keyframes anim-8 {
    0%, 60%, 100% {
      transform: rotate(315deg) translateX(40px) scale(1);
    }
    10%, 50% {
      transform: rotate(315deg) translateX(0) scale(1.5);
    }
  }

  @keyframes center {
    0%, 10%, 90%, 100% {
      transform: scale(0.7);
    }
    45%, 55% {
      transform: scale(1);
    }
  }
`;

export default Login;