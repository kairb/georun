import React, {useState, useEffect} from 'react';
import Score from '../Score'

const Game = () => {
  const [score, setScore] = useState(0);
  const interval = 1000;
  useEffect(() => {
    setInterval(() =>{
      setScore(score => score + 1)
    },interval)
    console.log(score)
    return (()=> clearInterval(interval))
  },[])
  return(
    <div>
      Game
      <Score score ={score}/>
    </div>
  )
}

export default Game;
