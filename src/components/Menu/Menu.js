import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  randomClassName: {
    color: 'green',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    alignContent:'center',
    fontSize:'50px',
  },
}));


 
 const Menu = ({setGameVisible}) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.randomClassName}>
        Georun
        <Box>
          <Button onClick={()=>setGameVisible(true)}>
            Start
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Menu;