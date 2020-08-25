import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import RefreshIcon from '@material-ui/icons/Refresh';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme)=>({
  wrapper:{
    padding: theme.spacing(12)
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function PopOver(props) {
  const classes = useStyles();
  const { onClose, open, score, exit, restart } = props;

  const handleClose = () => {
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} classes={{paper:classes.wrapper}}>
      <DialogTitle id="simple-dialog-title">Game Over</DialogTitle>
      <List>
        You scored {score}
        <Box>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<RefreshIcon/>}
            onClick={restart}
          >
            Restart
          </Button>

        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<ArrowBackIcon/>}
            onClick={exit}
          >
            Exit
          </Button>
        </Box>
      </List>
    </Dialog>
  );
}

PopOver.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  exit: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired
};

export default function PopOverMenu({open, score, exit, restart}) {

  const handleClose = () => {
    // setOpen(false);
  };

  return (
    <PopOver  open={open} score={score} onClose={handleClose} exit={exit} restart={restart} />
  );
}

PopOverMenu.prototype = {
  open: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  exit: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired
};
