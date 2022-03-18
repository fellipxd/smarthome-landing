import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  cursor: pointer;
  border: none;
  background: #007fff;
  height: 60px;
  width: 278px;
  left: 0px;
  top: 258px;
  border-radius: 5px;
  padding: 20px;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0em;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "→";
    margin-left: 10px;
  }
  &:hover:after {
    -webkit-animation: bounceright 1s alternate ease infinite;
    animation: bounceright 1s alternate ease infinite;
  }

  @keyframes bounceright {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(15px);
    }
  }
`;

export const Button = () => {
  return (
    <Btn>
      <div className="animate">Get Started </div>
    </Btn>
  );
};
