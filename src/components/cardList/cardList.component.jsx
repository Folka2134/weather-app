import React, { useState } from 'react'

import { Card } from '../card/card.component'

// const key = "8a32bc17bfde477e8d8175552211011"

export const CardList = ({ locations }) => {
  const [choice, setChoice] = useState([])

  const handleChoice = (chosenCard) => {
    if (choice !== chosenCard) {
      setChoice(chosenCard)
    } else if (chosenCard === choice) {
      setChoice([])
    }
  }
  
  
    return (
        <div className="card-list flex flex-wrap justify-center">
        {
          locations.slice(0,5).map((location, index) => (
            <Card 
              key={location.id} 
              location={location}
              handleChoice={handleChoice}
              flipped={location.id === choice.id}
            />
          ))
        }
      </div>
    )
}
