import React from 'react';
import {makeStyles, Button} from '@material-ui/core';

const useStyles = makeStyles(({
  block:{
    width:'100%',
    height:'100%',
    display:'inline-block',
    backgroundColor:({color}) => color
  }
}));

const Block = ({color}) => {
  const classes = useStyles({color});
  
  return(
    <div className={classes.block}>
    </div>
  )
}

export default Block;

