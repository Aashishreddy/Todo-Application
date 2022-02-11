import react, { Component } from "react";
import { Link } from "react-router-dom";

class WelcomeComponent extends Component{
    
    constructor(props){
        super(props)      
    }

    render(){    
        return(  
                <div className="WelcomeComponent">
                    Welcome {this.props.params.name}   <hr />
                    <Link to="/todos">Manage ToDos</Link>
                </div>
        );
    }
}   

export default WelcomeComponent