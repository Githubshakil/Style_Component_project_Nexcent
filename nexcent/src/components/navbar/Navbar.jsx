import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'
import NavItem from './NavItem'
const Navbar = () => {
  return (
    <Background>
        <Container>
            <Sidebyside>
                <Logo>
                    <LogoImg src="logo.png" alt="" />
                </Logo>
                <MenuItem>
                    <NavItem/>
                </MenuItem>
                <GroupButton>
                    <ButtonLogin>Login</ButtonLogin>
                    <ButtonSingup>Sing Up</ButtonSingup>
                </GroupButton>
            </Sidebyside>
        </Container>
    </Background>
  )
}

export default Navbar


const Background = styled.div`
 background-color: #f5f7fa;
 padding: 30px 0;
 `;

const Sidebyside = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

 `;

const Logo = styled.div`
 width: 10%;
 
 `;

 const LogoImg = styled.img`
 
 
 `;

const MenuItem = styled.div`
 width: 70%;
 display: flex;
 justify-content: center;

 `;


const GroupButton = styled.div`
width: 20%;
display: flex;
column-gap: 14px;
 `;


const ButtonLogin = styled.button`
padding: 10px 20px;
border-radius: 5px;

border: none;
background-color: #4caf50;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;
color: #ffffff;


 `;
const ButtonSingup = styled.button`
padding: 10px 20px;
border-radius: 5px;

border: none;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;

 `;
