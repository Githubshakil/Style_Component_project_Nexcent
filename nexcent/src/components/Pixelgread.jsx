import React from 'react'
import styled from 'styled-components'
import Container from './common/Container'

const Pixelgread = () => {
  return (
        <Background>
        <Container>
            <Sidebyside>
             <Left>
                <BannerImg src="pixelgrade.png" alt="pixelgrade" />
            </Left>
            <Right>
                <Heading>The unseen of spending three years at Pixelgrade </Heading>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</Paragraph>
                <Register>Learn More</Register>
                
            </Right>
       
            </Sidebyside>
        
        </Container>
    </Background>
  )
}

export default Pixelgread
const Background = styled.div`
 background-color: #f5f7fa;
 padding: 161px 0;
 `;
const Sidebyside = styled.div`
 display: flex;
 align-items: center;
  justify-content: space-between;
  margin-top: -100px
 `;
const Left = styled.div`
 width: 50%;
 `;
const Right = styled.div`
 width: 50%;
 `;

const Heading = styled.div`
 background-color: #f5f7fa;
 font-size: 36px;
 font-weight: 600;
 line-height: 44px;
 max-width: 657px;
 color: #4D4D4D;
    font-family: Inter;
 `;

const Paragraph = styled.div`
 color: #717171;
 font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin-top: 16px;
font-family: Inter;

 `;

 const Register = styled.button`
background: white;
padding: 14px 32px;
border-radius: 5px;
border: 2px solid #4caf4f;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px;
color:rgb(0, 0, 0);
margin-top: 32px;
cursor: pointer;
transition: all 0.3s ease;
&:hover {
    background: #4caf4f;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

 `;

 const BannerImg = styled.img`

 `;