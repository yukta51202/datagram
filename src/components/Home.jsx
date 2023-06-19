import React from 'react'
import styled from 'styled-components'
import doc from '../assets/doc.svg'
import git from '../assets/git.svg'
import arrow from '../assets/arrow.svg'
import ill1 from '../assets/ill1.svg'
import Roadmap from '../assets/Roadmap.png'
import data from '../assets/data.svg'
import visualize from '../assets/visulalize.svg'
import wiki from '../assets/wiki.svg'
import redarr from '../assets/red-arrow.svg'
import yellarr from '../assets/yell-arr.svg'
import wikill from '../assets/wiki-illo.avif'
import docill from '../assets/docs-illo.avif'
import projill from '../assets/projects-illo.avif'
import bluearr from '../assets/bluearr.svg'
import analyze from '../assets/analyze.svg'
import foot from '../assets/foot.svg'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import dashboard from '../assets/dashboard.jpg'
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
            <img src = {dashboard} alt = "open-book" width = {1000} />
          </div>
          <div> 
            <h3> Finally, all your work in one place! </h3>
          </div>
          <div class = "wikipedia">
            <div class = "wiki">
              <div class = "flex"> 
                <img src = {wiki} alt = "open-book" width = {50} />
                <h4>  Wikis </h4>
              </div>
              <p> It's hard to move fast if you can't find anything. Centralize all your knowledge in Datagram. </p>
              <Button variant = "contained" className = "exp" endIcon={<ArrowForwardIcon />}>
                Explore
              </Button> 
              <img src = {wikill} alt = "open-book" width = {200} class = "wikill" />
            </div>
            <div class = "wiki-image">
              <img src = {Roadmap} alt = "open-book" width = {800} />
            </div>
          </div>
          <div class = "wikipedia">
            <div class = "wiki">
              <div class = "flex"> 
                <img src = {doc} alt = "open-book" width = {50} />
                <h4>  Events </h4>
              </div>
              <p> Simple. Powerful. Beautiful. Schedule and manage your tasks efficiently. </p>
              <button class = "explore-yell"> Explore <img src = {yellarr} alt = "open-book" width = {20} />  </button>
              <img src = {docill} alt = "open-book" width = {200} class = "wikill" />
            </div>
            <div class = "wiki-image">
              <img src = {Roadmap} alt = "open-book" width = {800} />
            </div>
          </div>
          <div class = "wikipedia">
            <div class = "wiki">
              <div class = "flex"> 
                <img src = {git} alt = "open-book" width = {50} />
                <h4>  Data Visualization </h4>
              </div>
              <p> Manage any type of data more efficiently. No separate, clunky system. </p>
              <button class = "explore-blu"> Explore <img src = {bluearr} alt = "open-book" width = {20} />  </button>
              <img src = {projill} alt = "open-book" width = {200} class = "wikill" />
            </div>
            <div class = "wiki-image">
              <img src = {Roadmap} alt = "open-book" width = {800} />
            </div>
          </div>
          <div class = "free"> 
            <h3> Get started for free. </h3>
            <p> Play around with it first. Pay and add your team later. </p>
          </div>
          <Link to = "/Login" > 
          <button className='login'> Get Datagram free 
            <img src = {arrow} alt = "open-book" width = {20} class = "arr" /> 
          </button>
          </Link>
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
  font-weight: 600;
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
  font-weight: 600;
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
  margin-left: 120px;
  margin-top: -30px;
}

.explore{
  color: red;
  align-items: center;
  border: none;
  background-color: white;
  font-size: 20px;
}

.explore-yell{
  color: #ffc300;
  align-items: center;
  border: none;
  background-color: white;
  font-size: 20px;
}

.explore-blu{
  color: #00a7e1;
  align-items: center;
  border: none;
  background-color: white;
  font-size: 20px;
}

.free p{
  margin: 20px 150px 10px 100px;
  font-size: 22px;
}

.free h3{
  margin: 100px 150px 10px 100px;
  font-size: 55px;
  font-family: 'Roboto';
  text-align: center;
}

.login{
  background-color : black;
  border: none;
  border-radius : 10px;
  font-family : Roboto;
  font-size : 18px;
  padding : 8px 10px;
  color: white;
  text-align : center;
  margin-left: 250px;
  margin-top: 25px;
}
`

export default Home;
