import React from 'react'
import styled from 'styled-components'
import Container from './common/Container'

const GetAdemo = () => {
  return (
    <Background>
        <Container>



        <Heading>Pellentesque suscipit fringilla libero eu. </Heading>
        <Register>Get a Demo <ArrowImg src="down.svg" alt="" /> </Register>
            
    
        </Container>
    </Background>
  )
}

export default GetAdemo 







const Background = styled.div`
 background-color: #f5f7fa;
 padding: 161px 0;
 `;




const Heading = styled.div`
 background-color: #f5f7fa;
 font-size: 64px;
 font-weight: 600;
 line-height: 76px;
 max-width: 799px;
 color: #4D4D4D;
 margin : 0 auto;
 margin-bottom: 50px;
 text-align: center;
    font-family: Inter;
 `;



 const Register = styled.button`
background: #4caf4f;
padding: 14px 32px;
border-radius: 5px;
border: 2px solid #4caf4f;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
color:rgb(255, 255, 255);
display: block;
cursor: pointer;
transition: all 0.3s ease;

margin: 0 auto;
&:hover {
    background: #4caf4f;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

 `;

 const ArrowImg = styled.img`
color: black;
margin-left: 10px;
 `;
