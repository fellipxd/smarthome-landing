import React from "react";
import { Left, Right, Wrapper } from "./styled";

export const Footer = () => {
  return <Wrapper>
      <Left>
       <div className="content">
       <p className="logo">Mia Casa</p>
        <p>Copyright 2020 Mia Casa.</p>
        <p>All rights reserved</p>
        <div className="socials">
       </div>

        </div>
      </Left>

      <div className="links">
          <p  className="head"> Company</p>
          <a href='/'>About us</a>
          <a href='/'>Blog</a>
          <a href='/'>Contact us</a>
          <a href='/'>Pricing</a>
          <a href='/'>Testimonials</a>
      </div>
      <div className="links">
          <p  className="head"> Support</p>
          <a href='/'>Help center</a>
          <a href='/'>Terms of service</a>
          <a href='/'>Legal</a>
          <a href='/'>Privacy policy</a>
          <a href='/'>Status</a>
      </div>
      <Right>
            <p className="head">Stay up to date</p>
            <div className="search">
                <input type='text' placeholder='Your email address'></input>
            </div>
      </Right>
  </Wrapper>;
};
 