import react, {Component} from "react";
import AuthenticationService from "./AuthenticationService";


class LoginComponent extends Component{

    constructor(props){
        super(props);  //adding props to constructor, super() is good practice.

        this.state = {
            username:'Aashish',
            password:'',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }
0

    render(){
        return(
               <div className="container">
                   <h1>Login</h1>
                        {/* Can use handleUsername, handlePassword for individual elements; But handleChange works for every element */}
                        
                        Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /> &nbsp; 
                        Password: <input type="password" name="password" value = {this.state.password} onChange={this.handleChange}/> &nbsp;
                        <button className="btn btn-success" onClick={this.loginClicked}>Login</button> <br />
                        {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>} 
                        
                        {/* {this.state.showSuccessMessage && <div>Valid Credentials</div>}  */}
                         {/* <InvalidCredentials hasLoginFailed= {this.state.hasLoginFailed} />
                        <ValidCredentials isSuccess= {this.state.showSuccessMessage} /> */}
               </div> 
        );
    }

    loginClicked = () => {
        if(this.state.username === 'Aashish' && this.state.password === 'aash'){
            console.log("SUCCESSFUl")
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            // Using Ticks when sending a value through link
            this.props.navigate(`/welcome/${this.state.username}`) 
            //this.setState({showSuccessMessage: true})
        }
        else{
            console.log("FAILED")
            this.setState({hasLoginFailed: true})
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

    //Generic Event to handle changes
    handleChange = (event) => {
        //console.log(this.state)
        this.setState(
            {
                 [event.target.name] : event.target.value  
                //without hard coding username, password  
            }
        )
    }

}

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