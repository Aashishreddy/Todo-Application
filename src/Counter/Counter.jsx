import { Component } from 'react/cjs/react.development';
import './Counter.css'


class Counter extends Component{

    
    /*

    */
    constructor(){
        super();        // to access this, super() should be used.

        //declaring Initial State
        this.state = {
            counter: 0,
            multiplyCount: 2
        };

        //To access this, inside increment method
        this.increment = this.increment.bind(this);


    }

    render() {
            return(
                <div className="Counter">
                    <div className = "heading">Counter</div>
                    <button onClick={this.increment}>+1</button>
                    <span className='count'>{this.state.counter}</span>    {/* As in constructor to access counter*/}
                    <button onClick={this.multiply}>*2</button> 
                    <span className='multiplyCount'>{this.state.multiplyCount}</span>
                </div> 
            );
        }
    
increment()    //No need to write function within a class.
{            
    //console.log("Increment");
    this.setState({
        counter: this.state.counter + 1
    })
}        

//Using Arrow Function, No need to bind the method.
multiply = () => {
    this.setState({
        multiplyCount: this.state.multiplyCount * 2
    })
}

}


export default Counter;