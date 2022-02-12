import react, { Component } from "react";

class FooterComponent extends Component{
    
    constructor(props){
        super(props)      
    }

    render(){    
        return(  
                <footer className="footer">
                    <div className="foot">All Rights Reserved 2022.</div>
               </footer>
        );
    }
}   

export default FooterComponent