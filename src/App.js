import React, {useState} from 'react';
import Menu from './components/Menu';
import Game from './components/Game';


 function App() {
   const [gameVisibile, setGameVisible] = useState(false);
  return (
    <div className="App">
      {(gameVisibile)? <Game/>: <Menu setGameVisible={setGameVisible}/>}
    </div>
  );
}

export default App;
