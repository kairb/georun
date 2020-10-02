import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  score_inner:{
    borderStyle: 'inset',
    borderWidth: '2px',
    borderColor: 'grey',
    backgroundColor: 'red',
    borderRadius: '5px',
    padding:'5px',
    minWidth: '50px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'centre',
    color:'white'
  },
  score_outer:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'grey',
    backgroundColor: 'lightGray',
    borderRadius: '5px',
    padding: '5px',
    minWidth: '110px'
  }
});

const Score = ({score}) => {
  const classes = useStyles();
  return(
    <div className ={classes.score_outer}>
        Score
      <div className = {classes.score_inner}>
          {score}
      </div>
    </div>
  );
}

Score.prototype = {
  score: PropTypes.number.isRequired
}

export default Score;