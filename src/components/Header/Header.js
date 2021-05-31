import React, { useState } from 'react';
import styled from 'styled-components';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { FcAndroidOs, FcPhoneAndroid, FcMultipleCameras, FcShipped, FcLeave, FcGoogle } from "react-icons/fc";



const Container = styled.div`
    direction: rtl;
    width: 100%;
    display: flex;
       
`;

const Nav = styled.div`
    width: 100%;
    height: 44px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-bottom : 2px solid gray;
`;

const Logo = styled.h1`
    font-size: large;
    display: flex;
    margin-right: auto;
    color: black;
    padding-left: 1rem;
    cursor: pointer;

    :hover {
    color: #f2c2cf;
  }   
`;


const NavIcon = styled.button`
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    direction: ltr;
    z-index : 99;

    @media (min-width: 769px) {
        display: none;
    }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 1rem;
  margin-right: 1rem;

  li:nth-child(2) {
    margin: 0px 20px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  cursor: pointer;
  float: right;
  width: 100%;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const Line = styled.span`
  background-color : black;
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 4px;
  margin: 5px;
  transition: width 0.4s ease-in;
  
  :nth-child(2) {
    width: ${props => (props.open ? "50%" : "70%")};
  }
  :nth-child(3) {
    width: ${props => (props.open ? "25%" : "70%")};
  }
`;


const ArrowIconSpan = styled.div`
  margin-left: auto;
  width : 25px;
  height:25px;  
  svg{
      width: 100%;
      height: 100%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: 100vw;
  width : 98vw;
  background-color: white;
  top : 2rem;
  direction: ltr;
  opacity: ${props => (props.open ? 1 : 0)}; 

  @media (min-width: 769px) {
    display: none;
  }
`;


const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  width : 100%;
  height: 100vw;
  background-color: white;
  left: 0;

  > li{
    display: flex;
    margin-left: ${props => (props.open ? "0" : "30%")};
    margin-top: 1rem;
    transition: margin 0.4s ease;
    padding-bottom: 0.7rem;
    font-size: medium;
    border-bottom : 1px solid #ececec;
    
    :nth-child(2){
        transition: margin 0.6s ease;
    }
    :nth-child(3){
        transition: margin 0.9s ease;
    }
    a{
        margin-left: 0.6rem;
        opacity: ${props => (props.open ? 1 : 0)};
        transition: opacity 0.5s ease-in;
    }
  }
`;










//sub menu
const SubOverlay = styled.div`
  height: ${props => (props.open ? "50vh" : 0)};
  width: 100%;
  transition: height 0.5s ease;
  direction: ltr;

  @media (min-width: 769px) {
    display: none;
  }
`;

const SubOverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  width : 100%;
  background-color: white;
  left: 0.7rem;
  opacity: ${props => (props.open ? 1 : 0)};
  transition: opacity 0.3s ease-out;
  display: flex;
  flex-direction: column;
  align-items:left;

  > li {
    font-size: 14px;
    /* flex: 0 1 50%; */
    margin-top: 1.5rem;
    margin-left: ${props => (props.open ? "" : "10%")};
    transition: margin-left 0.5s ease-out;
    display: flex row;
    align-items:center;

    :nth-child(2){
        transition: margin-left 0.6s ease-out;
    }
  }
  p{
    padding-right: 0.5rem;
    padding-left:0.3rem;
  }
`;

const SubItem = styled.li`
    display: flex;
    flex-direction: row;
    margin-left: 0.7rem;
`;


const SubLink = styled.div`
  color: black;
  text-decoration: none;
  margin-top : 1rem;
  display:flex;
  flex:50%;
  flex-direction:row;
  align-items:center;

  :hover{
    color:blue;
    transition: color 0.4s ease;
  }

  div{
    display:flex;
    flex-direction:column;
    position: relative;
    :hover::after{
    content:"";
    color:blue;
    position: absolute;
    left:0;
    bottom:0;
    text-decoration: underline;
    transform-origin : right bottom;
    transform: scaleX(0);
    transition: transform 0.4s linear;
  }
  p{
    margin-top:0.3rem
  }
  }
`;


const SubIcon = styled.span`
    width:30px;
    height:30px;

    svg{
        width:100%;
        height:100%;
    }
`;




























const Header = () => {

    const [toggle, setToggle] = useState(false);
    const [subToggle, setSubToggle] = useState(false);



    return (
        <Container>
            <Nav>
                <NavIcon onClick={() => {
                    setToggle(!toggle)
                    setSubToggle(false)
                }}>
                    <Line open={toggle} />
                    <Line open={toggle} />
                    <Line open={toggle} />
                </NavIcon>

                <Menu open={toggle}>
                    <Item>
                        <Link target="#" href="https://www.wikinemad.ir">
                            Login
                        </Link>
                    </Item>
                    <Item>
                        <Link target="#" href="https://www.wikinemad.ir">
                            Technical
                        </Link>
                    </Item>
                    <Item>
                        <Link target="#" href="https://www.wikinemad.ir">
                            Basket
                        </Link>
                    </Item>
                </Menu>

                <Logo >
                    WikiNemad
                </Logo>

                <Overlay open={toggle}>

                    <OverlayMenu open={toggle}>
                        <Item>
                            <Link target="#" href="https://www.wikinemad.ir">
                                <p>Instagram</p>
                            </Link>
                        </Item>
                        <Item>
                            <Link target="#" href="https://www.wikinemad.ir">
                                <p>Behance</p>
                            </Link>
                        </Item>
                        <Item onClick={() => setSubToggle(!subToggle)}>
                            <Link>
                                <p>Github</p>

                                <SubOverlay open={subToggle}>
                                    <SubOverlayMenu open={subToggle}>
                                        <SubItem>
                                            <SubLink target="#" href="https://www.wikinemad.ir">
                                                <SubIcon><FcGoogle /></SubIcon>
                                                <div>
                                                    <p>Google</p>
                                                    <p>CEO</p>
                                                </div>
                                            </SubLink>
                                            <SubLink target="#" href="https://www.wikinemad.ir">
                                                <SubIcon><FcLeave /></SubIcon>
                                                <div>
                                                    <p>Calender</p>
                                                    <p>Date</p>
                                                </div>
                                            </SubLink>
                                        </SubItem>
                                        <SubItem>
                                            <SubLink target="#" href="https://www.wikinemad.ir">
                                                <SubIcon><FcAndroidOs /></SubIcon>
                                                <div>
                                                    <p>Android</p>
                                                    <p>Development</p>
                                                </div>
                                            </SubLink>
                                            <SubLink target="#" href="https://www.wikinemad.ir">
                                                <SubIcon><FcPhoneAndroid /></SubIcon>
                                                <div>
                                                    <p>Phone</p>
                                                    <p>Repairment</p>
                                                </div>
                                            </SubLink>
                                        </SubItem>
                                        <SubItem>
                                            <SubLink target="#" href="https://www.wikinemad.ir">
                                                <SubIcon><FcMultipleCameras /></SubIcon>
                                                <div>
                                                    <p>Photogeraf</p>
                                                    <p>Design</p>
                                                </div>
                                            </SubLink>
                                            <SubLink target="#" href="https://www.wikinemad.ir">
                                                <SubIcon><FcShipped /></SubIcon>
                                                <div>
                                                    <p>Transform</p>
                                                    <p>Best Way</p>
                                                </div>
                                            </SubLink>
                                        </SubItem>
                                        <SubItem>
                                            <SubLink target="#" href="https://www.wikinemad.ir">
                                                <SubIcon><FcMultipleCameras /></SubIcon>
                                                <div>
                                                    <p>Photogeraf</p>
                                                    <p>Design</p>
                                                </div>
                                            </SubLink>
                                            <SubLink target="#" href="https://www.wikinemad.ir">
                                                <SubIcon><FcShipped /></SubIcon>
                                                <div>
                                                    <p>Transform</p>
                                                    <p>Best Way</p>
                                                </div>
                                            </SubLink>
                                        </SubItem>

                                    </SubOverlayMenu>
                                </SubOverlay>
                            </Link>

                            <ArrowIconSpan>
                                {
                                    subToggle
                                        ?
                                        <BiChevronUp />
                                        :
                                        <BiChevronDown />

                                }
                            </ArrowIconSpan>
                        </Item>
                        
                        <Item>
                            <Link target="#" href="https://www.wikinemad.ir">
                                <p>Contact</p>
                            </Link>
                        </Item>
                        <Item>
                            <Link target="#" href="https://www.wikinemad.ir">
                                <p>Help</p>
                            </Link>
                        </Item>
                    </OverlayMenu>
                </Overlay>
            </Nav>
        </Container>
    )
};

export default Header;