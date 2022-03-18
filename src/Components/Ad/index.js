import React from "react";
import google from "../../assets/Layer2.png";
import apple from "../../assets/Layer1.png";
import { Left, Right, Wrapper } from "./styled";

export const Ad = (props) => {
  return (
    <Wrapper>
      <Left>
        <div className="get-app">
          <h2>{props.head}</h2>
          <p>{props.sub}</p>
          <img className="img" src={google} alt="background" />
          <img className="img" src={apple} alt="background" />
        </div>
      </Left>

      <Right key={props.id}>
        <div>
        {props.children}
        </div>
        
        {props.img ? <img className="img" src={props.img} alt="" /> : null }
        
      </Right>
    </Wrapper>
  );
};
