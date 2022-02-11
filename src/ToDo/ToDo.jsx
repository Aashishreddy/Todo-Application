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


class ToDo extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);  //for routing
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        return (
            <div className='ToDo'>
                <Router>
                    <HeaderComponent />
                    {/* A Router can only have one child. Hence define it in a empty fragment. */}
                    <Routes>
                        {/* Switch ensures only one the Component is shown. */}
                        <Route path="/" element= {<LoginComponentWithNavigation />} />
                        {/* <Route path="/login" element= {<LoginComponent />} /> */}
                        <Route path="/login" element ={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element = {<WelcomeComponentWithParams />} />
                        <Route path="/todos" element ={<ListToDos />} />
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