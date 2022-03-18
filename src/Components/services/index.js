import React from 'react'
import { GridCard } from './gridCard'
import { Grid, Wrapper } from './styled'

export const Services = () => {
    return (
        <Wrapper>
            <h2>Our Services</h2>
            <Grid>
                <GridCard/>
            </Grid>
        </Wrapper>
    )
}


