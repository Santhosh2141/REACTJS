import logo from './logo.svg';
import './App.css';
import { Greet } from './components/greet.js';
import DefualtGreet from './components/greet.js';
import Welcome from './components/welcome.js';
import Hello from './components/Hello.js';
import Message from './components/Message.js';

function App() {
  return (
    <div className="App">
      {/* <Greet></Greet>
      <DefualtGreet></DefualtGreet>
      <Welcome></Welcome> */}
      {/* <Hello /> 
      Sometime we wont know what property is being passed so we use children method */
      }
      <Greet name='Santhosh' heroName='SuperGirl'>
        <p>This is a children porperty</p>
      </Greet>
      <Greet name='Madhu' heroName='SuperGirl'>
        <button>ACTION</button>
      </Greet>
      <Greet name='Meena' heroName='WonderWoman' />
      <Welcome name='Santhos' heroName='SuperGirl'>
        <p>This is a children porperty</p>
      </Welcome>
      <Welcome name='Madhu' heroName='SuperGirl'>
        <button>ACTION</button>
      </Welcome>
      <Welcome name='Meena' heroName='WonderWoman' />
      <Message></Message>
    </div>
  );
}

export default App;
