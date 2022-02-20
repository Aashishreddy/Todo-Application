import react, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "./Api/HelloWorldService";

class WelcomeComponent extends Component{
    
    constructor(props){
        super(props)     
        
        this.state = {
            welcomeMessage: '',
            bean: '',
            pathVariableMessage: '',
            errorMessage: ''
        }
    }

    render(){    
        return(  
                <div className="Container">
                    <div className="welcome">
                        <h1>Welcome</h1>
                        {/* comes from the URL at Route. */}
                        <h3>{this.props.params.name} </h3>   <hr />
                    </div>
                    <div className="container">
                        {/* CALLING REST APIs */}
                        {/* <button className="btn btn-success" onClick={this.retrieveWelcomePage}>Hello World</button> <br/>
                        {this.state.welcomeMessage} <br />
                        <button className="btn btn-success" onClick={this.helloWorldBean}>Hello Bean</button>
                        {this.state.bean} <br />
                        <button className="btn btn-success" onClick={this.helloWorldPathVariable}>Hello Bean Path Variable</button>
                        {this.state.pathVariableMessage} */}

                        {/* <div className="alert alert-warning">
                            {this.state.errorMessage}
                        </div> */}
                    </div>
                    <Link to="/todos">Manage ToDos</Link>
                </div>
        );
    }

    // retrieveWelcomePage = () => {
    //     HelloWorldService.executeHelloWorldService()
    //     .then(response => this.setState({ welcomeMessage : response.data }) )
    // }

    // helloWorldBean = () => {
    //     HelloWorldService.helloWorldBeanService()
    //     .then(response => this.setState({ bean : response.data.message}) )
    // }

    // helloWorldPathVariable = () => {
    //     HelloWorldService.helloWBeanPathVariableService(this.props.params.name)
    //     .then(response => this.setState({ pathVariableMessage : response.data.message }) )
    //     .catch(error => this.handleError(error) )

    // }

    // handleError = (error) => {
    //     console.log(error.response.data.message)
    //     this.setState({ errorMessage: error.response.data.message })
    // }
}   

export default WelcomeComponent