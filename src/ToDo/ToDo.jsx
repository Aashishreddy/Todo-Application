import react, {Component} from "react";
// No Curly braces for imports
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import withNavigation from "./WithNavigation";
import ErrorComponent from "./ErrorComponent";
import withParams from "./WithParams";
import ListToDos from "./ListToDos";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import AuthenticationService from "./AuthenticationService";
import AuthenticatedRoute from "./AuthenticatedRoute";


class ToDo extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);  //for routing
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
 
        return (
            <div className='ToDo'>
                <Router>
                    <HeaderComponentWithNavigation/>    
                    {/* <HeaderComponent /> */}               
                    {/* With Just HeaderComponent the AuthenticationService.isUserLoggedIn() function is not hit everytime.
                    With HeaderComponentWithNavigation is working fine. */}
                    {/* A Router can only have one child. Hence define it in a empty fragment. */}
                    <Routes>
                        {/* Switch ensures only one the Component is shown. */}
                        <Route path="/" element= {<LoginComponentWithNavigation />} />
                        {/* <Route path="/login" element= {<LoginComponent />} /> */}
                        <Route path="/login" element ={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element = {<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>} />
                        <Route path="/todos" element ={<AuthenticatedRoute><ListToDos /></AuthenticatedRoute>} />
                        <Route path="/logout" element = {<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} />
                        <Route path="*" element = {<ErrorComponent />} />   
                        {/* any other path it goes to error Component */}
                    </Routes>
                    <FooterComponent />
                </Router>
            
            </div>
        );
    }
}

export default ToDo;