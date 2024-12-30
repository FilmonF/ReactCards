import React from 'react'
import CardList from './CardList'

const footballPlayers = [
    {
      "title": "Lionel Messi",
      "description": "Lionel Messi is considered one of the greatest football players of all time, known for his exceptional dribbling, vision, and playmaking abilities. He has won multiple Ballon d'Or awards and has played for top clubs like Barcelona and Paris Saint-Germain.",
      "image": "https://example.com/images/messi.jpg"
    },
    {
      "title": "Cristiano Ronaldo",
      "description": "Cristiano Ronaldo is a global football icon known for his incredible goal-scoring ability, athleticism, and leadership. He has played for top clubs including Manchester United, Real Madrid, and Juventus, and is regarded as one of the greatest players in history.",
      "image": "https://example.com/images/ronaldo.jpg"
    },
    {
      "title": "Neymar Jr.",
      "description": "Neymar Jr. is a Brazilian footballer known for his flair, skillful dribbling, and creativity on the field. He has played for top clubs such as Barcelona and Paris Saint-Germain and is one of the best forwards of his generation.",
      "image": "https://example.com/images/neymar.jpg"
    },
    {
      "title": "Kylian Mbappé",
      "description": "Kylian Mbappé is a French footballer who has risen to prominence with his incredible speed, finishing, and versatility. He has achieved great success with Paris Saint-Germain and the French national team, winning the World Cup in 2018.",
      "image": "https://example.com/images/mbappe.jpg"
    },
    {
      "title": "Mohamed Salah",
      "description": "Mohamed Salah is an Egyptian footballer renowned for his speed, dribbling, and goal-scoring ability. He plays for Liverpool and has helped the club win multiple trophies, including the Premier League and UEFA Champions League.",
      "image": "https://example.com/images/salah.jpg"
    }
  ]
  
const Greeting = () => {
  return (
    <div>
      <CardList cards={footballPlayers }/>

    </div>
  )
}

export default Greeting

