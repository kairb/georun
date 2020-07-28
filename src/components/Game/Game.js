import React, {useState, useEffect} from 'react';
import Score from '../Score'
import {makeStyles, Button} from '@material-ui/core';
import {createWorld, blockMap, updateWorld} from '../../utils/world';
import Block from '../Block';

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
    flexDirection: 'column',
  },
  row:{
    display:'flex',
    flexDirection:'row',
    height:'10%',
    width:'100%'
  }
  
}));

const Game = ({setGameVisible}) => {
  const classes = useStyles();
  const [score, setScore] = useState(0);
  const interval = 500;
  const [world, setWorld] = useState(createWorld());
  useEffect(() => {
    setInterval(() => {
      setScore(score => score + 1);
    }, interval);
    return (()=> clearInterval(interval));
  },[]);

  useEffect(() => {
    const newWorld = updateWorld(world);
    setWorld(newWorld);
  }, [score]);

  return(
    <div>
      <div className={`${classes.top} ${classes.left}`}>
        <Button color='primary' onClick={()=> setGameVisible(false)}>menu</Button>
      </div>
      <div className={`${classes.top} ${classes.right}`}>
        <Score score ={score}/>
      </div>
      <div className={classes.world}>
        {world.map((row) => 
        <div className ={classes.row}>
          {row.map((block) => <Block {...blockMap[block]}/>)}
        </div>)}
      </div>
    </div>
    
  )
}

export default Game;
