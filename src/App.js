import logo from './logo.svg';
import './App.css';
import First from './Modules/First';
import Second from './Modules/Second';
import Counter from './Counter/Counter';
import { Component } from 'react/cjs/react.production.min';

function App() {
  return( 
  <div className="App">

      {/*  Adding PROPS, by = {10} for defining integers */}
      <Counter></Counter>
      <Counter by ={5}></Counter>
      <Counter by ={10}></Counter>  
    </div>
  );
}

class LearningComponents extends Component{
  render(){
    return (
      <div className='LearningComponents'>
        <First></First>
        <Second></Second>
        {/* <Counter></Counter> */}
      </div>
    );
  }
}

export default App;
