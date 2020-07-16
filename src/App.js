import React, {useState} from 'react';
import Menu from './components/Menu';
import Game from './components/Game';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  fullViewPortContainer: {
    display:'flex',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    height:'100vh',
    maxWidth:'100vw'
  }
      
}));


const theme = createMuiTheme(() => ({
  palette:{
    primary:'green',
    secondary:'white',
  }
}))

 function App() {
   const classes = useStyles();
   const [gameVisibile, setGameVisible] = useState(false);
  return (
    <MuiThemeProvider theme = {theme}>
      <div className={classes.fullViewPortContainer}>
        {(gameVisibile)? <Game setGameVisible={setGameVisible} />: <Menu setGameVisible={setGameVisible} />}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
