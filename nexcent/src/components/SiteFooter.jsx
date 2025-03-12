import React from 'react'
import styled from 'styled-components'
import Container from './common/Container'

const SiteFooter = () => {
  return (
    <Background>
        <Container>
            <Sidebyside>
             <Left>
                <BannerImg src="pana.png" alt="pixelgrade" />
            </Left>
            <Right>
                <Heading>How to design your site footer like we did </Heading>
                <Paragraph>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</Paragraph>
                <Register>Learn More</Register>
                
            </Right>
       
            </Sidebyside>
        
        </Container>
    </Background>
  )
}

export default SiteFooter



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
 max-width: 601px;
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
background: #4caf4f;
padding: 14px 32px;
border-radius: 5px;
border: 2px solid #4caf4f;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px;
color:rgb(255, 255, 255);
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