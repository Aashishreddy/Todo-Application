
class AuthenticationService{
    registerSuccessfulLogin(username, password){
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('Username', username);
    }

    logout(){
        console.log("Logging out")
        sessionStorage.removeItem('Username');
    }
}

export default new AuthenticationService()