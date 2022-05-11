import react, {Component} from "react";
import ToDoService from "./ToDoService";
import AuthenticationService from "../AuthenticationService";
import { toast } from "react-toastify";

toast.configure()

class SignUp extends Component{
    constructor(props){
        super(props);  
        this.state = {
            email:'',
            password:'',
            rpassword:''
        }
    }

    render(){
        return(
               <div className="container">
                   <h1 className="signup">Register</h1>
                   <div className="email">
                            Email: 
                            <span className="spanEmail">
                                <input type="text" name="email" value={this.state.email} 
                                onChange={this.handleChange} /> &nbsp; 
                            </span></div>
                        
                    <div className="password">
                            Password: 
                                <span className="spanSPass">
                                    <input type="password" name="password" value = {this.state.password} 
                                    onChange={this.handleChange}/> &nbsp;
                                </span>
                    </div>       
                    <div className="rpassword">
                            Retype Password: 
                                <span className="spanSRPass">
                                    <input type="password" name="rpassword" value = {this.state.rpassword} 
                                    onChange={this.handleChange}/> &nbsp;
                                </span>
                    </div>
                           
                    <button className="signUp btn btn-success" onClick={() => this.onSubmit(this.state.email,this.state.password,
                                                        this.state.rpassword)}>Sign Up</button>

               </div> 
        );
    }
    
    onSubmit = (email,password,rpassword) => {
        if(password == rpassword){
            ToDoService.addUser(email,password,rpassword).
            then(response => {
                this.setState({ showSuccessMessage: response.data})
            })
            
            AuthenticationService.registerSuccessfulLogin(this.state.email, this.state.password)
            //cannot directly go to welcome component without Authentication
            this.props.navigate(`/welcome/${this.state.email}`) 
        }
        else{
            {this.passToast()}    
        }
    }
    
    passToast = () => {
        toast.error("Passwords do not match", {position: toast.POSITION.BOTTOM_CENTER})
    }

    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value })
    }
}

export default SignUp;