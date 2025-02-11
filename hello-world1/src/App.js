import logo from './logo.svg';
import './App.css';
import { Greet } from './components/greet.js';
import DefualtGreet from './components/greet.js';
import Welcome from './components/welcome.js';

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <DefualtGreet></DefualtGreet>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
