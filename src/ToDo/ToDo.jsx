import react, {Component} from "react";
// No Curly braces for imports
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import withNavigation from "./WithNavigation";

class ToDo extends Component{


    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        return (
            <div className='ToDo'>
                {/* A Router can only have one child. Hence define it in a empty fragment. */}
                <Router>
                    <Routes>

                        <Route path="/" element= {<LoginComponentWithNavigation />} />
                        {/* <Route path="/login" element= {<LoginComponent />} /> */}
                        <Route path="/login" element ={<LoginComponentWithNavigation />} />
                        <Route path="/welcome" element = {<WelcomeComponent />} />
                    </Routes>
                </Router>
            
            </div>
        );
    }
}

export default ToDo;