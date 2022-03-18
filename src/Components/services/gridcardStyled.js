import styled from "styled-components";

export const Card = styled.div`
   .card{
    padding: 2.5rem;
    border: 1px solid rgba(211, 233, 255, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s all ease-in-out; 
   }

   p{
       display: none;
       
   }

   .card:hover{
    border: 4px solid rgba(211, 233, 255, 1);
   }
   .card:hover p{    
   display: flex;
   }
`;
