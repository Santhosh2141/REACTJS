import logo from './logo.svg';
import './App.css';
import { Greet, Greet1 } from './components/greet.js';
import DefualtGreet from './components/greet.js';
import Welcome from './components/welcome.js';
import Hello from './components/Hello.js';
import Message from './components/Message.js';
import Counter from './components/Counter.js';
import FunctionClick from './components/FunctionClick.js';
import ClassClick from './components/ClassClick.js'
import EventBind from './components/EventBind.js';
import ParentComponent from './components/ParentComponent.js';
import UserGreeting from './components/UserGreeting.js';
import NameList from './components/NameList.js';
import Stylesheet from './components/Stylesheet.js';
import Inline from './components/Inline-style.js';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form.js';

function App() {
  return (
    <div className="App">
      {/* <Greet></Greet>
      <DefualtGreet></DefualtGreet>
      <Welcome></Welcome> */}
      {/* <Hello />  */}
      {/* Sometime we wont know what property is being passed so we use children method */}
      {/* <Greet name='Santhosh' heroName='SuperGirl'>
        <p>This is a children porperty</p>
      </Greet> */}
      {/* <Greet name='Madhu' heroName='SuperGirl'>
        <button>ACTION</button>
      </Greet> */}
      {/* <Greet name='Meena' heroName='WonderWoman' /> */}
      {/* <Welcome name='Santhos' heroName='SuperGirl'>
        <p>This is a children porperty</p>
      </Welcome> */}
      {/* <Welcome name='Madhu' heroName='SuperGirl'>
        <button>ACTION</button>
      </Welcome> */}
      {/* <Welcome name='Meena' heroName='WonderWoman' /> */}
      {/* <Message></Message>  */}
      {/* <Counter value='5'> </Counter> */}
      {/* <Greet1 name='Santhosh' heroName='SuperGirl'></Greet1> */}
      {/* <Welcome name='Santhosh' heroName='SuperGirl'>
        <p>This is a children porperty</p>
      </Welcome> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <EventBind /> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet primary = {true}></Stylesheet> */}
      {/* <Inline></Inline>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      <Form></Form>
    </div>
  );
}

export default App;
