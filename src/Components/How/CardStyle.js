import styled from "styled-components";

export const Wrapper = styled.div`
 

  h3 {
    font-size: 63px;
    color: #244d77;
    margin-top:-.5rem;
  }

  .title {
    font-weight: bold;
    font-size: 20px;
    color: #244d77;
  }

  a {
    text-decoration: none;
    color: #5c7a98;
    font-weight: bold;
    font-size: 16px;
  }


  .card{
    border: 1px solid rgba(211, 233, 255, 1);
  height: max-content;
  width: 250px;
  border-radius: 5px;
  padding: 1rem;
  margin: 3rem auto;
  transition: 0.3s all ease-in-out; 
  }

  .card:hover h3{
    color: #007FFF;

  }
  .card:hover a{
    color: #007FFF;

  }
  .card:hover {
    border: 3px solid #007FFF;

  }
`;
