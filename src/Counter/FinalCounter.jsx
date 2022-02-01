import react, { Component } from "react";
import Counter from "./Counter";

class FinalCounter extends Component{
    render(){
      return (
        <div className='FinalCounter'>
              {/*  Adding PROPS, by = {10} for defining integers */}
            <Counter></Counter>
            <Counter by ={5}></Counter>
            <Counter by ={10}></Counter>  
        </div>
      );
    }
  }

export default FinalCounter;  
  