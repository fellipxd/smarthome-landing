import React, { useEffect, useState } from 'react'
import { Container } from './styled'
import bg from '../../assets/bg.png'
import { Button } from './Button'
export const Hero = () => {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        function handleScroll() {
          setOffset(window.pageYOffset)
        }
    
        window.addEventListener("scroll", handleScroll)
    
        return () => {
          window.removeEventListener("scroll", handleScroll)
        }
      }, [])
    return (
        
        <Container id='home'>
             <img
          src={bg}
          alt="background"
          className="parallax"
          style={{
            transform: `translateY(${offset * 1}px)`,
            width: `100%`,
            maxHeight: `100%`,
            display: `block`
          }}
        />
        <div className="text-wrapper">
          <h1 className="headline">Home is where you have Absolute Control</h1>
          <h2 className="sub-headline">Smart home application that give you total control of your home </h2>
          <Button/>
        </div>
        
        </Container>
        
      
    )
}
