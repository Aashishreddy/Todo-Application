import react, { Component } from "react";
import {Link} from 'react-router-dom';
import AuthenticationService from "./AuthenticationService";

class HeaderComponent extends Component{
    
    constructor(props){
        super(props)      
    }

    render(){    
        return(  
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://www.google.com" className="navbar-brand">Main Page</a></div>
                        <ul className="navbar-nav">
                            <li className="nav-link"><Link to= "/welcome/Aashish">Home</Link></li>
                            <li className="nav-link"><Link to ="/todos">TODOs</Link></li>
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            <li className="nav-link"><Link to= "/login">Login</Link></li>
                            <li className="nav-link"><Link to= "/logout" onClick= {AuthenticationService.logout}>Logout</Link></li>
                        </ul>
                    </nav>
                </header>
        );
    }
}   

export default HeaderComponent