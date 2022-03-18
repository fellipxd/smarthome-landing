import React, { useEffect, useState } from "react";
import google from "../../assets/Layer2.png";
import apple from "../../assets/Layer1.png";
import { Center, Left, Navbar, Right, Wrapper } from "./styled";
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
export const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
 

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <Navbar scrollNav={scrollNav}>
      <Wrapper>
        <Left>Mia Casa</Left>
        <Center className={toggle ? "navMenu active" : "navMenu"}>
         <div className="nav">
         <a className="link" href="/#home" onClick={handleClick}>
            Home
          </a>

          <a className="link" href="/#about" onClick={handleClick}>
            How it works
          </a>

          <a className="link" href="/#experience" onClick={handleClick}>
            About
          </a>
          <img className="img" src={google} alt="background" />
          <img className="img" src={apple} alt="background" />
         </div>
         
        </Center>
        <Right>
          <img src={google} alt="background" />
          <img src={apple} alt="background" />
        </Right>
        <div className="mobileMenuIcon" onClick={handleClick}>
          {toggle ? <AiOutlineClose/> : <FiMenu/>}
        </div>
      </Wrapper>
    </Navbar>
  );
};
