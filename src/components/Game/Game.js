import React, {useState, useEffect} from 'react';
import Score from '../Score'
import {makeStyles, Button} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  top:{
    position:'absolute',
    top:'0px',
  },
  right:{ 
    right:'0px',
    padding:'5px'
  },
  left:{
    left:'0px',
    padding:'5px'
  }
}));

const Game = ({setGameVisible}) => {
  const classes = useStyles();
  const [score, setScore] = useState(0);
  const interval = 1000;
  useEffect(() => {
    setInterval(() =>{
      setScore(score => score + 1)
    },interval)
    return (()=> clearInterval(interval))
  },[])
  return(
    <div>
      <div className={`${classes.top} ${classes.left}`}>
        <Button color='primary' onClick={()=> setGameVisible(false)}>menu</Button>
      </div>
      <div className={`${classes.top} ${classes.right}`}>
        <Score score ={score}/>
      </div>
    </div>
    
  )
}

export default Game;
