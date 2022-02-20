import react, {Component} from "react";
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
import ToDoComponent from "./ToDoComponent";


class ToDo extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);  //So that this.props.navigate() works
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const ToDoComponentWithParamsandNavigation = withParams(withNavigation(ToDoComponent));
        const ListToDosComponentWithNavigation = withNavigation(ListToDos);
 
        // Whenever a component uses navigate function, it must use withNavigation
        return (
            <div className='ToDo'>
                <Router>
                    <HeaderComponentWithNavigation/>    
                    {/* <HeaderComponent /> */}               
                    {/* With Just HeaderComponent the AuthenticationService.isUserLoggedIn() function is not hit everytime.
                    With HeaderComponentWithNavigation is working fine. */}
                    <Routes>
                        <Route path="/" element= {<LoginComponentWithNavigation />} />
                        {/* <Route path="/login" element= {<LoginComponent />} /> */}
                        <Route path="/login" element ={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element = {<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>} />
                        <Route path="/todos/update/:id" 
                                element = {<AuthenticatedRoute><ToDoComponentWithParamsandNavigation /></AuthenticatedRoute>} />
                        <Route path="/todos" element ={<AuthenticatedRoute><ListToDosComponentWithNavigation /></AuthenticatedRoute>} />
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