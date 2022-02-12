import react, { Component } from "react";
import { Link } from "react-router-dom";

class WelcomeComponent extends Component{
    
    constructor(props){
        super(props)      
    }

    render(){    
        return(  
                <div className="Container">
                    <h1>Welcome</h1>
                    <h3>{this.props.params.name} </h3>   <hr />
                    <Link to="/todos">Manage ToDos</Link>
                </div>
        );
    }
}   

export default WelcomeComponent