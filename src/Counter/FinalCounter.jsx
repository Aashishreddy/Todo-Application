import react, { Component } from "react";
import Counter from "./Counter";

class FinalCounter extends Component{
  
  constructor(){
    super();

    this.state = {
      counter : 0
    }
    
    this.increment = this.increment.bind(this);
    //Use Arrow functions instead of binding in constructor
  }

  render(){
      return (
        <div className='Final'>
              {/*  Adding PROPS, by = {10} for defining integers */}
            <Counter by ={2} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
            <Counter by ={5} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
            <Counter by ={10} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
            {/* Display total */}
            <span className="TotalCount">{this.state.counter}</span> 
            <button onClick={this.reset}>Reset</button>
        </div>
      );
    }

    increment(by){
      console.log(`increment in Parent : ${by}`);  
      // this.setState(
      //   {
      //   counter: this.state.counter + by
      //   }
      // )
      this.setState(
          (prevState) => {
            return {counter: prevState.counter + by}
          }
      )
    }

    decrement = (by) => {
      console.log(`Decrement in Parent : ${by}`);
      this.setState(
        (prevState) => {
          return {counter: prevState.counter - by}
        }
    )
    }

    reset = () => {
      this.setState(
        {
          counter: 0
        }
      )
    }

  }

export default FinalCounter;  
  