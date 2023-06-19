import React from 'react'
import logo from '../assets/d-logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import wiki from '../assets/wiki.svg'
import page from '../assets/page.svg'
import target from '../assets/target.svg'
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  
  return (
    <Container>
    <div className = 'nav'>
      <div className = 'logo'>
        <img src = {logo} alt = "Logo" width = "250px" />
      </div>
      <div className = 'menu'>  
        <div className = 'dropdown'>
            <Button className = "dropbtn" endIcon={<ExpandMoreIcon />}>
                Product
              </Button> 
            <div className = 'dropdown-content'>
              <div className = 'Wiki'> 
                <a href = ''> 
                <div class = "flex"> 
                  <img src = {wiki} alt = "open-book" width = {40} />
                  <div class = "flex-content">
                    <div> Notes </div>
                  </div>
                </div>
                </a>
              </div>
              <div className = 'Wiki'> 
                <a href = ''> 
                <div class = "flex"> 
                  <img src = {target} alt = "open-book" width = {40} />
                  <div class = "flex-content">
                    <div> Events </div>
                  </div>
                </div>
                </a>
              </div>
              <div className = 'Wiki'> 
                <a href = ''> 
                <div class = "flex"> 
                  <img src = {page} alt = "open-book" width = {40} />
                  <div class = "flex-content">
                    <div> Data </div>
                  </div>
                </div>
                </a>
              </div>
            </div>
        </div>
        <Button className = "dropbtn">
          Pricing
        </Button>
        <div class = "btn"> 
          <Link to = "/Login" > 
              <Button variant="contained">
                Try Datagram
              </Button>
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
    margin-top : 0px;
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
    font-family : 'Raleway';
    font-weight : 600;
  }

  /* Dropdown Button */
  .dropbtn {
    background-color : white;
    font-size: 17px;
    padding : 10px;
    font-family : 'Raleway';
    font-weight : 600;
    border: none;
    outline: none;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    top: 9.5%;
    left: 82.5%;
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
    font-family : "Raleway";
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

  .btn button{
    background-color : black;
    border: none;
    font-family: Raleway;
    border-radius : 5px;
    font-size : 14px;
    font-weight: 600;
    padding : 6px 11px;
    color: white;
    text-align : center;
    margin-left: 5px;
  }
`

export default Navbar;

