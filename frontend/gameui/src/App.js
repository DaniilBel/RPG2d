import logo from './logo.svg';
import './App.css';
import Window from './components/GameWindow/Window';
import Chat from './components/ChatMenu/Chat';
import Controls from './components/ChatMenu/Controls';

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
