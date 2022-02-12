
class AuthenticationService{
    registerSuccessfulLogin(username, password){
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('Username', username)
        sessionStorage.setItem('Password', password)
    }
}

export default new AuthenticationService()