import logo from './logo.svg';
import './App.css';
import First from './Modules/First';
import Second from './Modules/Second';
import Counter from './Counter/Counter';
import { Component } from 'react/cjs/react.production.min';
import FinalCounter from './Counter/FinalCounter';
import ToDo from './ToDo/ToDo';

function App() {
  return( 
      <div className="App">
          {/* <FinalCounter></FinalCounter>   */}
          <ToDo />
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
