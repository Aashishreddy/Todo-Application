// So that only authenticated users can access Content.

import React, { Component } from "react/cjs/react.development";
import AuthenticationService from "./AuthenticationService";
import {Navigate} from "react-router-dom";

class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn()){
            return {...this.props.children}
            // this is Spread Operator. It takes individual properties as parameters and spreads Them.
        }else{
            return <Navigate to="/login" />
        }
    }
}

export default AuthenticatedRoute;