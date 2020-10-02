import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Score from '../Score';
import { makeStyles, Button } from '@material-ui/core';
import {
  createWorld,
  blockMap,
  updateWorld,
  getCollisionHeight,
} from '../../utils/world';
import Block from '../Block';
import Plane from '../Plane';
import { updatePosition } from '../../utils/listeners';
import PopOverMenu from '../PopOverMenu';
import Background from '../Background';

const useStyles = makeStyles(() => ({
  top: {
    position: 'absolute',
    top: '0px',
  },
  right: {
    right: '0px',
    padding: '5px',
  },
  left: {
    left: '0px',
    padding: '5px',
  },
  world: {
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
  column: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
}));
const screenHeight = window.innerHeight;

const Game = ({ setGameVisible }) => {
  const classes = useStyles();
  const [playerPostion, setPlayerPosition] = useState(screenHeight * 0.2);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const interval = 125;
  const [world, setWorld] = useState(createWorld());
  useEffect(() => {
    if (!gameOver) {
      setTimeout(() => {
        setScore((score) => score + 1);
      }, interval);
    }
    return () => clearTimeout(interval);
  }, [gameOver, score]);

  useEffect(() => {
    const newWorld = updateWorld(world);
    setWorld(newWorld);

    setPlayerPosition(playerPostion + 10);
  }, [score]);

  const updatePosition = useMemo(
    () => ({ keyCode }) => {
      if (keyCode === 32 && !gameOver) {
        setPlayerPosition(playerPostion - 20);
      }
    },
    [gameOver, playerPostion],
  );

  useEffect(() => {
    if (playerPostion > getCollisionHeight(world)) {
      setGameOver(true);
    }
    window.addEventListener('keydown', updatePosition);
    return () => window.removeEventListener('keydown', updatePosition);
  }, [playerPostion, world]);

  const restart = useCallback(() => {
    setWorld(createWorld());
    setScore(0);
    setPlayerPosition(screenHeight * 0.2);
    setGameOver(false);
    console.log('restart');
  }, []);

  const exit = useCallback(() => {
    setGameVisible(false);
  }, []);

  return (
    <div>
      <Background stage={1} moveCount={score} />
      <Background stage={2} moveCount={score} />
      <Background stage={3} moveCount={score} />
      <Background stage={4} moveCount={score} />
      <Background stage={5} moveCount={score} />
      <div className={`${classes.top} ${classes.left}`}>
        <Button color="primary" onClick={exit}>
          menu
        </Button>
      </div>
      <div className={`${classes.top} ${classes.right}`}>
        <Score score={score} />
      </div>
      <div className={classes.world}>
        <Plane position={playerPostion} gameOver={gameOver} />
        {world.map((column) => (
          <div className={classes.column}>
            {column.map((block) => (
              <Block {...blockMap[block]} />
            ))}
          </div>
        ))}
      </div>

      <PopOverMenu
        open={gameOver}
        score={score}
        restart={restart}
        exit={exit}
      />
    </div>
  );
};

export default Game;
