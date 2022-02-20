import react, {Component} from "react";
import AuthenticationService from "./AuthenticationService";


class LoginComponent extends Component{

    constructor(props){
        super(props);  
        this.state = {
            username:'Aashish',
            password:'',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }

    render(){
        return(
               <div className="container">
                   <h1 className="login">Login</h1>
                        
                        <div className="userName">
                            Username: 
                            <span className="spanUser">
                                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /> &nbsp; 
                            </span></div>
                        
                        <div className="password">
                            Password: 
                                <span className="spanPass">
                                    <input type="password" name="password" value = {this.state.password} onChange={this.handleChange}/> &nbsp;
                                </span>
                        </div>
                        
                        <button className="btn btn-success" onClick={this.loginClicked}>Login</button>  <br/>
                        
                        <div className="forgotCredentials">
                            <a href="">Forgot Username or Password?</a>
                        </div>
                        {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>} 
                        
                        {/* {this.state.showSuccessMessage && <div>Valid Credentials</div>}  */}
                         {/* <InvalidCredentials hasLoginFailed= {this.state.hasLoginFailed} />
                        <ValidCredentials isSuccess= {this.state.showSuccessMessage} /> */}
               </div> 
        );
    }

    loginClicked = () => {
        if(this.state.username === 'Aashish' && this.state.password === 'aash'){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            //navigate works only with Navigate components
            this.props.navigate(`/welcome/${this.state.username}`) 
            //this.setState({showSuccessMessage: true})
        }
        else{
            this.setState({hasLoginFailed: true})
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