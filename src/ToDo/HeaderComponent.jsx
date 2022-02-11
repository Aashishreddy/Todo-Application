import react, { Component } from "react";

class HeaderComponent extends Component{
    
    constructor(props){
        super(props)      
    }

    render(){    
        return(  
                <div className="HeaderComponent">
                    Header <hr />
                </div>
        );
    }
}   

export default HeaderComponent