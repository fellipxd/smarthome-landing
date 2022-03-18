import React from 'react'
import { Cards, Container, Left, Right } from './styled'
import iphone from '../../assets/Phone Mockup.png'
import { Button } from '../Hero/Button'
import { Card } from './Card'
import { data } from './CardData'
export const How = (props) => {
   
    return (
        <Container>
            <Left>
                <div className='gif'>
                    <img src={iphone} alt='mobile app illustration'/>
                </div>
            </Left>
            <Right>
                <h2>How it works</h2>
                <Cards>
                    <Card
                     sn= {data[0].sn}
                     heading = {data[0].heading}
                     text = {data[0].text}
                    />
                   <div className='offset-card'>
                   <Card
                     sn= {data[1].sn}
                     heading = {data[1].heading}
                     text = {data[1].text}
                    />
                   </div>
                    <Card
                     sn= {data[2].sn}
                     heading = {data[2].heading}
                     text = {data[2].text}
                    />
                </Cards>
                <Button/>
            </Right> 
        </Container>
    )
}
