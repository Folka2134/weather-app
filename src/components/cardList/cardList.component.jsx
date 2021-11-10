import React from 'react'
import { Card } from '../card/card.component'

// const key = "8a32bc17bfde477e8d8175552211011"

export const CardList = (props) => {
  
    return (
        <div className="card-list flex flex-wrap justify-center">
        {props.locations.map((data) => (           
          <Card 
            key={data.id} 
            location={data}
          />
        ))}
      </div>
    )
}
