import styled from "styled-components";

export const Wrapper = styled.div`
  height: 90vh;
  padding: 2rem;

  h2 {
    color: #244d77;
    margin: 20px auto;
    width: max-content;
    font-size: 48px;
  }

  @media screen and (max-width: 930px) {
    height: max-content;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  height: 88%;
  width: 70%;
  margin: 0 auto;

  @media screen and (max-width: 930px) {
    display: flex;
    flex-direction: column;
  }
`;
