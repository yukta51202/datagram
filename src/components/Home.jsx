import React from 'react'
import styled from 'styled-components'
import doc from '../assets/doc.svg'
import git from '../assets/git.svg'
import ill1 from '../assets/ill1.svg'
import data from '../assets/data.svg'
import visualize from '../assets/visulalize.svg'
import wiki from '../assets/wiki.svg'
import wikill from '../assets/wiki-illo.avif'
import docill from '../assets/docs-illo.avif'
import projill from '../assets/projects-illo.avif'
import analyze from '../assets/analyze.svg'
import foot from '../assets/foot.svg'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import dashboard from '../assets/dashboard.jpg'
import calendar from '../assets/calendar.jpg'
import report from '../assets/report.jpg'
import team from '../assets/team.jpg'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div class = "center">
          <div class = "Banner">
            <div class = "Head">
              <h1>
                See your <span><img src = {data} class = "hero" alt = "data" width = {60} />data come to life: </span>
                <span><img src = {visualize} class = "hero" alt = "visual" width = {60} />Visualize, and </span>
                <span><img src = {analyze} alt = "analyze" width = {60} id = "an" />Analyze. </span>
              </h1>
              <p> Datagram is where, better, faster work happens! <br />
              <Link to = "/Login" > 
              <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                Try Datagram
              </Button> 
              </Link>
              </p>
            </div>
          </div>
          <div>
            <img src = {ill1} alt = "open-book" width = {800} class = "ill" />
          </div>
          <div class = "roadmap">
            <img src = {dashboard} alt = "Dashboard" width = {1000} />
          </div>
          <div> 
            <h3> Finally, all your work in one place! </h3>
          </div>
          <div class = "wikipedia">
            <div class = "wiki">
              <div class = "flex"> 
                <img src = {wiki} alt = "open-book" width = {50} />
                <h4>  Teams </h4>
              </div>
              <p> Manage all your team members and their roles in Datagram. </p>
              <Button variant = "contained" className = "exp" endIcon={<ArrowForwardIcon />}>
                Explore
              </Button> 
              <img src = {wikill} alt = "open-book" width = {150} class = "wikill" />
            </div>
            <div class = "wiki-image">
              <img src = {team} alt = "open-book" width = {800} height={400}/>
            </div>
          </div>
          <div class = "wikipedia">
            <div class = "wiki">
              <div class = "flex"> 
                <img src = {doc} alt = "open-book" width = {50} />
                <h4>  Events </h4>
              </div>
              <p> Simple. Powerful. Beautiful. Schedule and manage your tasks efficiently. </p>
              <Button variant = "contained" className = "exp-yell" endIcon={<ArrowForwardIcon />}>
                Explore
              </Button> 
              <img src = {docill} alt = "open-book" width = {150} class = "wikill" />
            </div>
            <div class = "wiki-image">
              <img src = {calendar} alt = "Events" width = {800} height={400} />
            </div>
          </div>
          <div class = "wikipedia">
            <div class = "wiki">
              <div class = "flex"> 
                <img src = {git} alt = "open-book" width = {50} />
                <h4>  Data Visualization </h4>
              </div>
              <p> Manage any type of data more efficiently. No separate, clunky system. </p>
              <Button variant = "contained" className = "exp-blu" endIcon={<ArrowForwardIcon />}>
                Explore
              </Button> 
              <img src = {projill} alt = "open-book" width = {150} class = "wikill" />
            </div>
            <div class = "wiki-image">
              <img src = {report} alt = "open-book" width = {800} height={400} />
            </div>
          </div>
          <div class = "free"> 
            <h3> Get started for free. </h3>
            <p> Play around with it first. Pay and add your team later. </p>
          </div>
          <div class = "btn"> 
            <Link to = "/Login" > 
            <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                  Try Datagram
                </Button> 
            </Link>
          </div>
          <div>
            <img src = {foot} alt = "open-book" width = {800} />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
.center{
  max-width: 800px;
  margin: 0 auto;
}

h1{
  margin-top: 30px;
  font-size: 72px;
  font-family: Raleway;
  text-align: center;
  line-height: 1em;
  max-width: 1000px;
}

.btn Button{
  margin-top: 20px;
  background-color : black;
  border: none;
  font-family: Raleway;
  border-radius : 8px;
  font-size : 15px;
  font-weight: 600;
  padding : 8px 10px;
  color: white;
  text-align : center;
  margin-left : 300px;
}

.hero{
  vertical-align: baseline;
  aspect-ratio: 1;
}

.Head p{
  font-size: 27px;
  font-family: Raleway;
  font-weight: 600;
  text-align: center;
  margin: -30px 80px 5px 70px;
}

p button{
  margin-top: 20px;
  background-color : black;
  border: none;
  font-family: Raleway;
  border-radius : 8px;
  font-size : 15px;
  font-weight: 600;
  padding : 8px 10px;
  color: white;
  text-align : center;
}

p button:hover{
  background-color : #1b263b;
}

.exp{
  color: white;
  background-color : #d90429;
  align-items: center;
  font-size: 14px;
  font-family: Raleway;
}

.exp-yell{
  color: white;
  background-color : #ffc300;
  align-items: center;
  font-size: 14px;
  font-family: Raleway;
}

.exp-blu{
  color: white;
  background-color : #00a7e1;
  align-items: center;
  font-size: 14px;
  font-family: Raleway;
}

.arr{
  margin-left: 8px;
}

.ill{
  margin-top: 30px;
  margin-left: 10px;
}

#an{
  margin-bottom: -15px;
}

.roadmap img{
  border: 2px solid black;
  border-radius: 15px;
  margin-top: -10px;
  margin-left: -100px;
}

h3{
  margin: 60px 170px 5px 170px;
  font-size: 40px;
  font-family: 'Montserrat';
  text-align: center;
  font-weight: 600;
}

.wiki{
  margin-left: -100px;
  min-width: 330px;
}

.flex{
  margin-bottom: -40px;
}

.wiki h4{
  font-size: 28px; 
  margin-left: 10px;
  font-family: 'Raleway';
  font-weight: 800;
}

.wiki p{
  font-size: 18px; 
  max-width: 260px;
  text-align: justify;
  font-family: 'Montserrat';
}

.flex{
  display: flex;
}

.wikipedia{
  display : flex;
  margin-top: 50px;
}

.wiki-image img{
  border: 2px solid black;
  border-radius: 15px;
}

.wikill{
  margin-left: 200px;
  margin-top: -30px;
}

.free p{
  margin: 20px 0px 20px 120px;
  font-size: 22px;
}

.free h3{
  margin: 50px 10px 5px 20px;
  font-size: 55px;
  font-family: 'Raleway';
  text-align: center;
}

.login{
  background-color : black;
  border: none;
  border-radius : 10px;
  font-family : Raleway;
  font-size : 18px;
  padding : 8px 10px;
  color: white;
  text-align : center;
  margin-left: 250px;
  margin-top: 25px;
}
`

export default Home;
