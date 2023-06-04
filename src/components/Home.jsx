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

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div class = "center">
          <div class = "Banner">
            <div class = "Head">
              <h1> See your <img src = {data} alt = "database" width = {70} /> data come to life:&nbsp; 
              Visualize <img src = {visualize} alt = "database" width = {70} />, and &nbsp;
              <img src = {analyze} alt = "database" width = {80} id = "an" /> Analyze. </h1>
              <p> Datagram is where, better, faster work happens. <br /><br />
              <Link to = "/Register" > 
                <button> Get Datagram free 
                  <img src = {arrow} alt = "open-book" width = {20} class = "arr" /> 
                </button> 
              </Link>
              </p>
            </div>
          </div>
          <div>
            <img src = {ill1} alt = "open-book" width = {800} class = "ill" />
          </div>
          <div class = "roadmap">
            <img src = {Roadmap} alt = "open-book" width = {1000} />
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
              <p> It's hard to move fast if you can't find anything. Centralize all your knowledge in Notion. </p>
              <button class = "explore"> Explore <img src = {redarr} alt = "open-book" width = {20} />  </button>
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
                <h4>  Docs </h4>
              </div>
              <p> Simple. Powerful. Beautiful. Communicate more efficiently with next generation docs. </p>
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
                <h4>  Projects </h4>
              </div>
              <p> Manage any type of project more efficiently. No separate, clunky system. </p>
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
          <Link to = "/Register" > 
          <button className='login'> Get Notion free 
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
  max-width: 780px;
  margin: 0 auto;
}

h1{
  margin-top: 65px;
  font-size: 75px;
  font-family: 'Roboto';
  font-weight: 900;
  text-align: center;
  line-height: 0.9em;
}

.Head p{
  font-family: 'Roboto';
  font-size: 30px;
  text-align: center;
  margin: -20px 150px 10px 100px;
}

p button{
  background-color : black;
  border: none;
  border-radius : 10px;
  font-family : Roboto;
  font-size : 18px;
  padding : 8px 10px;
  color: white;
  text-align : center;
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
  margin: 100px 150px 10px 100px;
  font-size: 45px;
  font-family: 'Roboto';
  text-align: center;
}

.wiki{
  margin-left: -100px;
  min-width: 330px;
}

.flex{
  margin-bottom: -40px;
}

.wiki h4{
  font-size: 30px; 
  margin-left: 10px;
}

.wiki p{
  font-size: 20px; 
  max-width: 260px;
  text-align: justify;
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
