import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  
  background-image: linear-gradient(174.39deg, #56aaff 54.8%,rgba(86, 170, 255, 0) 185.45%);

  @media screen and (max-width: 930px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 40px 0 ;

  .get-app {
    margin: auto;
    width: 70%;
  }

  h2 {
    font-size: 50px;
    color: #fff;
  }
  p {
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    margin-bottom: 35px;
  }
  img {
    margin-right: 20px;
  }

  @media screen and (max-width: 600px){
    h2 {
    font-size: 40px;
  }
  }
`;
export const Right = styled.div`
  flex: 1;

  img {
    height: 100%;
    width: 100%;
  }
`;
