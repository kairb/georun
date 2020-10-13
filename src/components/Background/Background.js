import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import background1 from '../../assets/parallaxBackground/plx-1.png';
import background2 from '../../assets/parallaxBackground/plx-2.png';
import background3 from '../../assets/parallaxBackground/plx-3.png';
import background4 from '../../assets/parallaxBackground/plx-4.png';
import background5 from '../../assets/parallaxBackground/plx-5.png';

const backgroundStageMatrix = {
  1: background1,
  2: background2,
  3: background3,
  4: background4,
  5: background5,
};

const useStyles = makeStyles({
  background: {
    backgroundImage: ({ stage }) => `url(${backgroundStageMatrix[stage]})`,
    position: 'fixed',
    backgroundSize: 'auto 100%',
    backgroundPosition: ({ moveCount, stage }) => -moveCount * stage,
    backgroundRepeat: 'repeat-x',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
  },
});

const Background = ({stage, moveCount}) => {
  const styles = useStyles({ stage, moveCount });
  return <Box className={styles.background}></Box>;
};

export default Background;
