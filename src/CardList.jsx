import React from 'react'
import Card from './Card'
const CardList = ({cards}) => {
  return (
    <div>
      {cards.map((card)=>(
       <Card title={card.title} description={card.description} image={card.splashImageUrl}/>
    
      ))}
    </div>
  )
}

export default CardList
