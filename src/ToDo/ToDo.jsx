import react, {Component} from "react";
// No Curly braces for imports
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import withNavigation from "./WithNavigation";
import ErrorComponent from "./ErrorComponent";
import withParams from "./WithParams";

class ToDo extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);  //for routing
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        return (
            <div className='ToDo'>
                {/* A Router can only have one child. Hence define it in a empty fragment. */}
                <Router>
                    <Routes>
                        {/* Switch ensures only one the Component is shown. */}
                        <Route path="/" element= {<LoginComponentWithNavigation />} />
                        {/* <Route path="/login" element= {<LoginComponent />} /> */}
                        <Route path="/login" element ={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element = {<WelcomeComponentWithParams />} />
                         <Route path="*" element = {<ErrorComponent />} />   
                        {/* any other path it goes to error Component */}
                    </Routes>
                </Router>
            
            </div>
        );
    }
}

export default ToDo;