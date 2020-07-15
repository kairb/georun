import React, {useState} from 'react';
import Menu from './components/Menu';
import Game from './components/Game';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  fullViewPortContainer: {
    display:'flex',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    height:'100vh'
  }
      
}));

 function App() {
   const classes = useStyles();
   const [gameVisibile, setGameVisible] = useState(false);
  return (
    <div className={classes.fullViewPortContainer}>
      {(gameVisibile)? <Game />: <Menu setGameVisible={setGameVisible} />}
    </div>
  );
}

export default App;
