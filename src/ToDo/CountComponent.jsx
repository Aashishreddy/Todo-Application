import react, { Component } from "react";

class CountComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }

    render(){
        return(
             <div className="CountComponent">
                 <span className="count">{this.state.count}</span>
                 <button className="btn btn-success" onClick={this.IncreaseCount}>Count+</button>
             </div>   
        );
    }

    IncreaseCount = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
}

export default CountComponent