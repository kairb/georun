import React from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  randomClassName: {
    color: 'red',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  }
}));


 
 const Menu = ({setGameVisible}) => {
  const classes = useStyles();
  return (
      <Box className={classes.randomClassName}>
        Side Scroller
        <Box>
          <Button onClick={()=>setGameVisible(true)}>
            Start
          </Button>
        </Box>
      </Box>
  );
}

export default Menu;