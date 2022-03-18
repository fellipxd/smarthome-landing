import React from "react";
import { Wrapper } from "./CardStyle";

export const Card = (props) => {
    
  return (
    <Wrapper>
     <div className="card">
     <h3>{props.sn}</h3>
      <p className="title">{props.heading}</p>
      <p className="desc">
       {props.text}
      </p> 
      <a href='/'>Learn More</a>
     </div>
    </Wrapper>
  );
}; 
