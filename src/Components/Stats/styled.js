import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 35vh;
  display: flex;
`;
export const StatGrid = styled.div`
  display: grid;
  width: 70%;
  height: 100%;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr;

  h2 {
    font-size: 45px;
    color: #56aaff;
    margin-bottom: 0;
  }
  h3 {
    font-size: 25px;
    color: #56aaff;
    margin-top: 0;
  }
  .stat{
    text-align: center;
  }

  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
    font-size: 35px;
  }
  h3 {
    font-size: 20px;
  }
  }
 
`;

