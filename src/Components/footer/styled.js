import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 40px 0;
  background-color: #0b0d17;
  justify-content: space-between;

  /* padding: 1rem 4rem; */

  .links {
    display: flex;
    flex-direction: column;
  }
  .head{
    color: #fff;
    font-size: 19px;
  }
  a {
    color: gray;
;
    text-decoration: none;
  }

  @media screen and (max-width: 978px){
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .links {
      margin: 15px 0;
      line-height: 1.5em;
  }

`;
export const Left = styled.div`
  color: #fff;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    font-family: IM FELL DW Pica SC;
    font-size: 38px;
    font-style: normal;
    line-height: 38px;
    letter-spacing: 0em;
  }
  @media screen and (max-width: 978px){
        width: 100%;
        margin: 20px 0;
    }
`;

export const Right = styled.div`
 width: 25%;
  .search{
    background: #fff;
    opacity: 0.3;
    padding: 0.5em;
    border-radius: 10px;
    width: 60%;
  }

    input{
        background: transparent;
      
        color: #fff;

        border: none;
    }

    @media screen and (max-width: 978px){
        width: 100%;
        margin: 20px 0;
        .search{
            margin: auto;
        }
    }
`
