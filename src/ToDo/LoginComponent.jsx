import react, {Component} from "react";

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

    render(){
        return(
               <div className="LoginComponent">
                   {/* Can use handleUsername, handlePassword for individual elements; But handleChange works for every element */}
                   Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /> <br />
                   Password: <input type="password" name="password" value = {this.state.password} onChange={this.handleChange}/> <br />
                   <button onClick={this.loginClicked}>Login</button> <br />
                   {/* <InvalidCredentials hasLoginFailed= {this.state.hasLoginFailed} />
                   <ValidCredentials isSuccess= {this.state.showSuccessMessage} /> */}
                   {this.state.hasLoginFailed && <div>Invalid Credentials</div>} 
                   {this.state.showSuccessMessage && <div>Valid Credentials</div>} 
               </div> 
        );
    }

    loginClicked = () => {
        if(this.state.username === 'Aashish' && this.state.password === 'aash'){
            console.log("SUCCESSFUl")
            this.setState({showSuccessMessage: true})
        }
        else{
            console.log("FAILED")
            this.setState({hasLoginFailed: true})
        }
    }

    //Controlled Component: Whenever a change happens, state is updated, then UI is updated.
    handleUsername = (event) => {
        console.log(event.target.value)
        this.setState({username: event.target.value})
    }

    handlePassword = (event) => {
        console.log(event.target.value)
        this.setState({password: event.target.value})
    }

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