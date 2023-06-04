import React from 'react'
import logo from '../assets/d-logo.png'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import expand from '../assets/expand.svg'
import wiki from '../assets/wiki.svg'
import page from '../assets/page.svg'
import ai from '../assets/ai.svg'
import target from '../assets/target.svg'

const Navbar = () => {
  
  return (
    <Container>
    <div className = 'nav'>
      <div className = 'logo'>
        <img src = {logo} alt = "Logo" width = "250px" />
      </div>
      <div className = 'menu'>  
        <div className = 'dropdown'>
          <button className = 'dropbtn'> 
            <div class = "product"> 
              Product
              <img src = {expand} alt = "Expand" width = {15}/>
            </div>
            <div className = 'dropdown-content'>
              <div className = 'Wiki'> 
                <a href = ''> 
                <div class = "flex"> 
                  <img src = {wiki} alt = "open-book" width = {40} />
                  <div class = "flex-content">
                    <div> Wikis </div>
                  </div>
                </div>
                </a>
              </div>
              <div className = 'Wiki'> 
                <a href = ''> 
                <div class = "flex"> 
                  <img src = {target} alt = "open-book" width = {40} />
                  <div class = "flex-content">
                    <div> Projects </div>
                  </div>
                </div>
                </a>
              </div>
              <div className = 'Wiki'> 
                <a href = ''> 
                <div class = "flex"> 
                  <img src = {page} alt = "open-book" width = {40} />
                  <div class = "flex-content">
                    <div> Docs </div>
                  </div>
                </div>
                </a>
              </div>
              <div className = 'Wiki'> 
                <a href = ''> 
                <div class = "flex"> 
                  <img src = {ai} alt = "open-book" width = {40} />
                  <div class = "flex-content">
                    <div> Notion AI </div>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </button>
        </div>
        <div className = 'dropdown'>
        <button className = 'dropbtn'> Pricing </button>
        </div>
        <div> 
          <Link to = "/Register" > 
            <button className='login'> Try Datagram free </button>
            </Link>
        </div>
      </div>
    </div>
    </Container>
  )
}

const Container = styled.div`
  .nav{
    display : flex;
    justify-content : space-between;
    margin-top : 10px;
  }

  .logo{
    margin-left : 20px;
    margin-top: 10px;
  }

  .menu{
    display : flex;
    justify-content : space-between;
    margin-right : 20px;
    align-items : center;
  }

  /* Dropdown Button */
  .dropbtn {
    background-color : white;
    font-size: 18px;
    padding : 10px;
    font-family : 'Roboto';
    border: none;
    outline: none;
  }

  .product img{
    padding-left: 5px;
    padding-top: 2px;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    top: 10.5%;
    left: 85%;
    right: auto;
    transform: translateX(-50%);
    padding: 5px;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding : 10px;
    font-family : "Roboto";
    font-size : 18px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover 
  {background-color: #e9ecef;}

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content 
  {display: block;}

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn 
  {background-color: #e9ecef;}

  .login{
    background-color : black;
    border: none;
    border-radius : 10px;
    font-family : Roboto;
    font-size : 16px;
    padding : 8px;
    color: white;
    margin : 10px;
    cursor : pointer;
  }

  .login:hover{
    background-color: #313232;
  }

  .flex{
    display : flex;
  }

  .flex-content{
    padding-left: 25px;
    padding-top: 9px;
    font-size: 18px;
  }
`

export default Navbar;

