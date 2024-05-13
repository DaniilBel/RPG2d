import './App.css';

import Chat from './components/ChatMenu/Chat';
import Controls from './components/Control/Controls';
import Window from './components/GameWindow/Window';

function App() {
  return (
    <div className="App">
      <div className='App-content'>
        <Window />
      </div>
      <div className='App-chat'>
        <Chat />
      </div>
      <div className='App-buttons'>
        <Controls />
      </div>
    </div>
  );
}

export default App;
