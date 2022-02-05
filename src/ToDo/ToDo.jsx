import react, {Component} from "react";
// No Curly braces for imports
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


class ToDo extends Component{
    render(){
        return (
            <div className='ToDo'>
                {/* A Router can only have one child. Hence define it in a empty fragment. */}
                <Router>
                    <Routes>
                        <Route path="/" element= {<LoginComponent />} />
                        <Route path="/login" element= {<LoginComponent />} />
                        <Route path="/welcome" element = {<WelcomeComponent />} />
                    </Routes>
                </Router>
            
            </div>
        );
    }
}

export default ToDo;