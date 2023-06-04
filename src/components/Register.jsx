import React from 'react'
import styled from 'styled-components'
import log from '../assets/d-logo-log.png'

const Register = () => {
  return (
    <Container>
      <div class = "reg">
        <div class="card">
            <div class="container">
            <img src = {log} alt = "database" width={250}/>
            </div>
            <div>
                <form>
                    <input type = "email" name = "email" placeholder = 'Email' required />
                    <input type = "password" name = "password" placeholder = 'Possword' required/>
                    <input type = "password" name = "password" placeholder = 'Confirm Password' required />

                    <button type = "submit"> Login </button>                  
                </form>
            </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
.reg{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 1rem;
}
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 30px; 
    padding: 1rem 6rem;
  }
  
  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
   form{
    display : flex;
    flex-direction : column;
    gap : 1rem;
    margin-top: -40px;
    margin-bottom: 20px;

    input{
      font-family: Rubik;
      font-size: 1rem;
      background-color: transparent;
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
      background-color: #d00000;
      color: white;
      margin-top: 1rem;
      padding: 1rem 2rem;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      &:hover{
        background-color: #010101;
        color: white;
      }
`

export default Register