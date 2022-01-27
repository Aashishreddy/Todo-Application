import logo from './logo.svg';
import './App.css';
import First from './Modules/First';
import Second from './Modules/Second';
import Counter from './Counter/Counter';
import { Component } from 'react/cjs/react.production.min';

function App() {
  return( 
  <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <LearningComponents></LearningComponents>
      {/* </header> */}
   
    </div>
  );
}

class LearningComponents extends Component{
  render(){
    return (
      <div className='LearningComponents'>
        <First></First>
        <Second></Second>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
