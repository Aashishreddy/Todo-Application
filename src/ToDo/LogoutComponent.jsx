import react, { Component } from "react";

class LogoutComponent extends Component{
    
    constructor(props){
        super(props)      
    }

    render(){    
        return(  
                <div className="LogoutComponent">
                    <h1>You are Logged Out.</h1> <br />
                    <h2>Thank You!</h2>
                </div>
        );
    }
}   

export default LogoutComponent