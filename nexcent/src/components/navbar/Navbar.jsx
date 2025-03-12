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
                    <ButtonSingup>Login</ButtonSingup>
                    <ButtonSingup $bg>Sing Up</ButtonSingup>
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
 cursor: pointer;

 `;


const GroupButton = styled.div`
width: 20%;
display: flex;
column-gap: 14px;
 `;
const Button = styled.button`
padding: 10px 20px;
border-radius: 5px;
border: none;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 20px;
cursor: pointer;
transition: all 0.3s ease;
border: 1px solid #4caf4f;
&:hover {
    background: ${(props) => props.$bg ? "#4caf4f" : "#4caf4f"};
    color: ${(props) => props.$bg ? "#ffffff" : "#ffffff"};
`;

const ButtonSingup = styled(Button)`

background: ${(props) => props.$bg ? "none" : "none"};

color: ${(props) => props.$bg ? "black" : "black"};


 `;
