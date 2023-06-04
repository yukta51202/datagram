import React from 'react'
import styled from 'styled-components'


const Footer = () => {
  return (
    <Container>
    <div className = 'foot'>
        <div class = "pink"> 
            <h4> Notion, Inc. 2023 </h4>
        </div>
        
    </div>
    </Container>
  )
}

const Container = styled.div`
.foot{
    color: white;
    font-family: "Roboto";
}
  
.foot h4{
    align-items: center;
    margin-left: 700px;
}

`

export default Footer;

