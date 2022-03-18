import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem;

  @media screen and (max-width: 930px) {
    height: max-content;
    flex-direction: column;
  }
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.6; 
  img{
    width: 100%;
  }
`;
export const Right = styled.div`
  flex: 1;
  position: relative;

  h2 {
    color: #244d77;
    font-size: 50px;
  }

  
  @media screen and (max-width: 930px){
   display: flex;
   flex-direction: column;
   align-items: center;
  }
 
  @media screen and (max-width: 600px){
    h2 {
    font-size: 40px;
  }
  }



`;
export const Cards = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-between;
  aign-items: center;

  .offset-card {
    position: relative;
    top: 25%;
  }
  @media screen and (max-width: 930px) {
    display: flex;
    flex-direction: column;
    .offset-card {
      position: relative;
      top: 0%;
    }
  }
`;
