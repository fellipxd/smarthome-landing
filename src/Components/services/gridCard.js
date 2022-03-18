import React from 'react'
import { Card } from './gridcardStyled'
import  {data} from './gridData'
export const GridCard = () => {
    return (
     <>
       {data.map((data) => (
        <Card key={data.id}>
      <div className="card">
      <div>
        <img src={data.icon} alt='icon'/>
        </div>
        <h3>{data.head}</h3>
        <p>Lorem tortor massa cras at lectus quam vitae gravida nunc pellentesque amet amet ante maecenas </p>
      </div>
        </Card>
       ))}
       </>
    )
}
     
