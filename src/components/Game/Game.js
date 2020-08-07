import React, {useState, useEffect} from 'react';
import Score from '../Score'
import {makeStyles, Button} from '@material-ui/core';
import {createWorld, blockMap, updateWorld, getCollisionHeight} from '../../utils/world';
import Block from '../Block';
import Plane from '../Plane';
import {updatePosition} from '../../utils/listeners';



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
  },
  world:{
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    zIndex: '-1',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  column:{
    display:'flex',
    flexDirection:'column',
    height:'100%',
    width:'100%'
  }
  
}));
const screenHeight = window.innerHeight;

const Game = ({setGameVisible}) => {
  const classes = useStyles();
  const [playerPostion, setPlayerPosition] = useState(screenHeight * 0.2); 
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const interval = 125;
  const [world, setWorld] = useState(createWorld());
  useEffect(() => {
    if(!gameOver){
      setInterval(() => {
      setScore(score => score + 1)
    }, interval);}
    return (()=> clearInterval(interval));
  },[gameOver]);
  
  useEffect(() => {
    const newWorld = updateWorld(world);
    setWorld(newWorld);
    
    setPlayerPosition(playerPostion + 10);
  }, [score]);
  const updatePosition = ({keyCode}) => { if(keyCode === 32){setPlayerPosition(playerPostion - 20)} }
  
  useEffect (() => {
    if(playerPostion > getCollisionHeight(world)){
      setGameOver(true);
    }
    window.addEventListener('keydown', updatePosition);
    return () => window.removeEventListener('keydown', updatePosition);
  },[playerPostion,world]);
  

  return(
    <div>
      <div className={`${classes.top} ${classes.left}`}>
        <Button color='primary' onClick={()=> setGameVisible(false)}>menu</Button>
      </div>
      <div className={`${classes.top} ${classes.right}`}>
        <Score score ={score}/>
      </div>
      <div className={classes.world}>
        <Plane position = {playerPostion} gameOver={gameOver} />
        {world.map((column) => 
        <div className ={classes.column}>
          {column.map((block) => <Block {...blockMap[block]}/>)}
        </div>)}
      </div>
    </div>
    
  )
}

export default Game;
