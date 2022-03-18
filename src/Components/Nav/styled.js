import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px){
    width: 90%;
  }
`;
export const Left = styled.div`
  font-family: IM FELL DW Pica SC;
  color: #fff;
  font-size: 38px;
  font-style: normal;
  line-height: 48px;
  letter-spacing: 0em;
  display: flex;
  align-items: center;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;

  .img {
    display: none;
    margin-right: 10px;
    cursor: pointer;
  }
  .link {
    cursor: pointer;
    text-decoration: none;
    margin-right: 5rem;
    color: #fff;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
    cursor: pointer;
  }
  @media screen and (max-width: 930px) {
    display: none;
  }
`;

export const Navbar = styled.div`
  height: 50px;
  width: 100vw;
  background:  ${({ scrollNav }) => (scrollNav ? " #56AAFF" : "transparent")};
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 100;
 

  .mobileMenuIcon {
    display: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    margin-right: 20px;
    z-index: 1500;
  }

  @media screen and (max-width: 930px) {
    .mobileMenuIcon {
      display: inline-block;
    }
    .mobileMenuIcon.active {
      width: max-content;
      background-color: #fff;
    }
    .navMenu {
      background: #56aaff;
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: -2000px;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .navMenu.active {
      align-items: center;
      justify-content: center;
      top: 0px;
      left: 0;
      transition: all 0.5s ease;
      z-index: 1000;
    }
    .nav {
      display: flex;
      flex-direction: column;
    }
    .link {
      font-size: 4rem;
      margin-bottom: 3rem;
      margin-right: 0;
    }
    .img{
        display: inline-block;
        
        width: 50%;
        margin: 1rem auto;
    }
  }
`;
