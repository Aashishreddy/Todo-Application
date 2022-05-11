import logo from './logo.svg';
import './App.css';
import First from './Modules/First';
import Second from './Modules/Second';
import Counter from './Counter/Counter';
import { Component } from 'react/cjs/react.production.min';
import FinalCounter from './Counter/FinalCounter';
import ToDo from './ToDo/ToDo';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProgressFunction from './ToDo/ProgressFunction';
import ToolTipFunction from './ToDo/ToolTipFunction';
import ReactTooltip from "react-tooltip";


function App() {
  return( 
      <div className="App">
          {/* <FinalCounter></FinalCounter>   */}
          <ToDo />
          {/* <ProgressFunction></ProgressFunction> */}
          {/* <LearningComponents></LearningComponents> */}
          {/* <ToolTipFunction></ToolTipFunction> */}
      </div>
  );
}



class LearningComponents extends Component{
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
  }

  ToolTipFunc = () => {
    <div className="ToolTipFunc">
       <ReactTooltip id="registerTip" place="top" effect="solid">
        Tooltip for the register button
      </ReactTooltip>
    </div>
  }

  render(){
    return (
      <div className='LearningComponents'>
        <First></First>
        <Second></Second>
        {/* <ToolTipFunction></ToolTipFunction> */}
        {/* <Counter></Counter> */}
        <button data-tip data-for="registerTip" onClick={this.ToolTipFunc}>
          Register
        </button>
      </div>
    );
  }


}

export default App;

