import React from 'react'
import styled from 'styled-components';
import Container from '../common/Container'

const Banner = () => {
  return (
    <Background>
        <Container>
            <Sidebyside>
                <Left>
                <Heading>Lessons and insights <InnerHeading>from 8 years</InnerHeading> </Heading>
                <Paragraph>Where to grow your business as a photographer: site or social media?</Paragraph>
                <Register>Register</Register>
                </Left>
                <Right>
                    <BannerImg src="bannerimg.png" alt="banner" />
                </Right>
           
            </Sidebyside>
            
        </Container>
    </Background>
  )
}

export default Banner

const Background = styled.div`
 background-color: #f5f7fa;
 padding: 161px 0;
 `;
const Sidebyside = styled.div`
 display: flex;
 align-items: center;
  justify-content: space-between;
 `;
const Left = styled.div`
 width: 60%;
 `;
const Right = styled.div`
 width: 40%;
 `;

const Heading = styled.div`
 background-color: #f5f7fa;
 font-size: 64px;
 font-weight: 600;
 line-height: 76px;
 max-width: 657px;
 color: #4D4D4D;
    font-family: Inter;
 `;
const InnerHeading = styled.span`
 color: #4caf4f
 `;
const Paragraph = styled.div`
 color: #717171;
 font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
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