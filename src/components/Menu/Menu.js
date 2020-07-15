import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  randomClassName: {
    color: 'green',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    alignContent:'center',
  }
}));


 
 const Menu = ({setGameVisible}) => {
  const classes = useStyles();
  return (
      <Box className={classes.randomClassName}>
        Geochase
        <Box>
          <Button onClick={()=>setGameVisible(true)}>
            Start
          </Button>
        </Box>
      </Box>
  );
}

export default Menu;