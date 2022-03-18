import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .parallax {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .text-wrapper {
    font-family: "Inter", sans-serif;
    width: 80%;
    text-align: left;
    position: relative;
  }

  .headline {
    width: 70%;
    font-size: 72px;
    color: #fff;
  }
  .sub-headline{
      color: #fff;
      font-size: 20px;
      font-weight: 300;
  }

  @media screen and (max-width: 600px){
    .headline{
      font-size:50px;
      width: 100%;
    }
    .text-wrapper {

    width: 90%;
   
  }
  }
`;
