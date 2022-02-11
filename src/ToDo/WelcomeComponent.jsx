import react, { Component } from "react";

class WelcomeComponent extends Component{
    
    constructor(props){
        super(props);

    }

    render(){    
        return(  
                <div className="WelcomeComponent">
                    Welcome sadas {this.props.params.name}
                </div>
        );
    }
}   

export default WelcomeComponent