import logo from './logo.svg';
import './App.css';
import First from './Modules/First';
import Second from './Modules/Second';
import Counter from './Counter/Counter';
import { Component } from 'react/cjs/react.production.min';
import FinalCounter from './Counter/FinalCounter';

function App() {
  return( 
      <div className="App">
          <FinalCounter></FinalCounter>  
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
