import axios from "axios"

 class HelloWorldService{
    executeHelloWorldService(){
        console.log('execute Hello World')
        return axios.get('http://localhost:8080/hello-world')
    }

    helloWorldBeanService(){
        console.log('Hello World Bean')
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    helloWBeanPathVariableService(name){
        console.log('Hello Bean Path Variable')
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    }
 }

 export default new HelloWorldService()