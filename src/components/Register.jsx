import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import log from '../assets/d-logo-log.png'
import login from '../assets/login.svg'
import girl from '../assets/girl.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const [values,setValues] = useState({
    name:"",
    email:"",
    password:"",
  });

  const toastOptions = {
    position: 'top-right',
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  }

  const handleChange = (event) => {
    setValues ({...values, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    
  }

  function handleValidation() {
    const{name, password, email} = values;

    if(name === "" && email === "" && password === ""){
      toast.error("Details are required!", toastOptions);
      return false;
    }
    if(email === "" && password === ""){
      toast.error("Details are required!", toastOptions);
      return false;
    }

    if(password === ""){
      toast.error("Password is required!", toastOptions);
      return false;
    } 

    if(email === ""){
      toast.error("Email is required!", toastOptions);
      return false;
    }

    if(name === ""){
      toast.error("Email is required!", toastOptions);
      return false;
    }

    return true;
  }

  return (
  <>
    <Container>
      <img src = {login} alt = "login-illustration" width = "700px" class = "log"/>
      <img src = {girl} alt = "girl" width = "180px" class = "girl"/>
      <div class = "reg">
        <div class="card">
            <div class="container">
            <img src = {log} alt = "database" width={250}/>
            </div>
            <div>
                <form onSubmit = {(event) => handleSubmit(event)}>
                    <input type = "name" name = "name" placeholder = 'Name' onChange = {(e) => handleChange(e)} required />
                    <input type = "email" name = "email" placeholder = 'Email' onChange = {(e) => handleChange(e)} required />
                    <input type = "password" name = "password" placeholder = 'Possword' onChange = {(e) => handleChange(e)} required/>
                    <input type = "password" name = "password" placeholder = 'Confirm Password' required />

                    <button type = "submit" onClick = {handleValidation}> Register </button>                  
                </form>
            </div>
        </div>
      </div>
    </Container>
    <ToastContainer/>
  </>
  )
}

const Container = styled.div`
.girl{
  position: absolute;
  margin-left: 990px;
  margin-top: 220px;
}
.log{
  position: absolute;
  margin-top: 200px;
  margin-left: 130px;
  z-index: 1;  
}
.reg{
  height: 97vh;
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
    gap : 1rem;
    margin-top: -50px;
    margin-bottom: 20px;
    box-sizing: initial; 

    input{
      font-family: Rubik;
      width: 250px;
      font-size: 1rem;
      padding: 1rem;
      border: 0.1rem solid black;
      border-radius: 0.4rem;
      color: black;
      &:focus{
        border: 0.1rem solid #d00000;
        outline: none;
      }
    }

    button{
      font-family: Rubik;
      font-size: 1rem;
      background-color: #e63946;
      color: white;
      margin-top: 1rem;
      padding: 1rem 2rem;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      &:hover{
        background-color: #d00000;
        color: white;
      }
`

export default Register