import react, { Component } from "react";
import { Link } from "react-router-dom";

class WelcomeComponent extends Component{
    
    constructor(props){
        super(props)      
    }

    render(){    
        return(  
                <div className="Container">
                    <div className="welcome">
                        <h1>Welcome</h1>
                        <h3>{this.props.params.name} </h3>   <hr />
                    </div>
                    <Link to="/todos">Manage ToDos</Link>
                </div>
        );
    }
}   

export default WelcomeComponent