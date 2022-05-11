import react, { Component } from "react";
    import {Link} from 'react-router-dom';
import AuthenticationService from "./AuthenticationService";

class HeaderComponent extends Component{
    
    constructor(props){
        super(props)      
    }

    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();        
        return(
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="github"><a href="https://github.com/Aashishreddy" className="navbar-brand">GitHub</a></div>
                        <div><a href="https://www.linkedin.com/in/aashish-reddy-vundhyala-579114173/" className="navbar-brand">LinkedIn</a></div>
                        <ul className="navbar-nav">
                            {isUserLoggedIn && <li className="nav-link"><Link to= "/welcome/Aashish">Home</Link></li>}
                            {isUserLoggedIn && <li className="nav-link"><Link to ="/todos">TODOs</Link></li>}
                        </ul>   
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn && <li className="nav-link"><Link to= "/login">Login</Link></li>}
                            {isUserLoggedIn && <li className="nav-link"><Link to= "/logout" onClick= {AuthenticationService.logout}>Logout</Link></li>}
                        </ul>
                    </nav>
                </header>
        );
    }
}   

export default HeaderComponent