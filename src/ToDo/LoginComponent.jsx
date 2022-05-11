import react, {Component} from "react";
import ToDoService from "./Api/ToDoService";
import AuthenticationService from "./AuthenticationService";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
   
toast.configure()

class LoginComponent extends Component{
    constructor(props){
        super(props);  
        this.state = {
            email:'',
            password:'',
            userExists: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
            options : {
                body: 'Do you like my body?',
                data: 'I like None',        
              }
        }
    }
    
    render(){
        
        return(
               <div className="container">
                   <h1 className="login">Login</h1>
                        
                        <div className="userName">
                            Email: 
                            <span className="spanUser">
                                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /> &nbsp; 
                            </span></div>
                        
                        <div className="password">
                            Password: 
                                <span className="spanPass">
                                    <input type="password" name="password" value = {this.state.password} onChange={this.handleChange}/> &nbsp;
                                </span>
                        </div>
                        
                        <button className="btn btn-success" onClick={() => 
                                            this.loginClicked(this.state.email, this.state.password)}>Login</button>  <br/>
                        
                        <div className="forgotCredentials">
                            <a href="http://localhost:4200/signup">New User?</a>
                        </div>
                        <NotificationContainer/>
                        {/* {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>} 
                        {this.state.userExists && <div className="alert alert-warning">{this.state.userExists}</div>}  */}
                        {/* {this.state.showSuccessMessage && <div>Valid Credentials</div>}  */}
                         {/* <InvalidCredentials hasLoginFailed= {this.state.hasLoginFailed} />
                        <ValidCredentials isSuccess= {this.state.showSuccessMessage} /> */}
               </div> 
        );
    }

    loginClicked = (email, password) => {
        ToDoService.loginUser(email, password)
        .then(response => {
            if(response.data == "Invalid Credentials"){
                // this.setState({hasLoginFailed: true})
                {this.notify()}
            }
            if(response.data == "User do not Exist"){
                // this.setState({ userExists: "User do not Exist. Sign Up"})
                {this.userExist()}
            }
            if(response.data == "login Successful"){
                AuthenticationService.registerSuccessfulLogin(this.state.email, this.state.password)
                this.props.navigate(`/welcome/${this.state.email}`) 
            }            
        })
    }

   notify = () => {
       toast.info("Invalid Credentials")
   }

   userExist = () => {
       //toast.error("User do not Exist")
       //{this.createNotification()}
        {this.notifyMe()}
    }

   createNotification = () => {
        console.log("Notification")
        NotificationManager.error('User do not exist', 'User Status', 20000);       
   }

   notifyMe = () => {
    var options = {
        body: 'Do you like my body?',
        data: 'I like None',      
      }
      if (Notification.permission === "granted") {
       var notification = new Notification("Look Away from Screen", options);    
    }
}

    //Generic Event to handle changes
    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value })
    }
}
    //Controlled Component: Whenever a change happens, state is updated, then UI is updated.
    // handleUsername = (event) => {
    //     console.log(event.target.value)
    //     this.setState({username: event.target.value})
    // }

    // handlePassword = (event) => {
    //     console.log(event.target.value)
    //     this.setState({password: event.target.value})
    // }

// function InvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null       
// }

// function ValidCredentials(props){
//     if(props.isSuccess){
//         return <div>Valid Credentials</div>
//     }
//     return null
// }

export default LoginComponent;