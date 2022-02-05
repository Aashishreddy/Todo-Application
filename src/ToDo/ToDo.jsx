import react, {Component} from "react";
// No Curly braces for imports
import LoginComponent from "./LoginComponent";


class ToDo extends Component{
    render(){
        return (
            <div className='ToDo'>
                ToDo Application
                <LoginComponent />
            </div>
        );
    }
}

export default ToDo;