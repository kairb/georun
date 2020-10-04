import React from 'react';
import {makeStyles, Button} from '@material-ui/core';

const useStyles = makeStyles(({
  block:{
    width:'100%',
    height:'100%',
    display:'inline-block',
    backgroundSize: 'auto 100%',
    backgroundImage:({image}) => `url(${image})`
  }
}));

const Block = ({image}) => {
  const classes = useStyles({image});
  
  return(
    <div className={classes.block}>
    </div>
  )
}

export default Block;

