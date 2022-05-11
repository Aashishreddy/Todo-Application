import axios from "axios";

class ToDoService{
    addUser(email,password,rpassword){
        return axios.put(`http://localhost:8080/signup/${email}/${password}/${rpassword}`)
    }
    loginUser(email,password){
        return axios.put(`http://localhost:8080/login/${email}/${password}`)
    }
    getToDos(name){
        return axios.get(`http://localhost:8080/todo/getTodos/${name}`)
    }

    deleteToDo(name, id){
        return axios.delete(`http://localhost:8080/todo/${name}/delete/${id}`)
    }

    countUp(id){
        return axios.get(`http://localhost:8080/users/increaseCount/${id}`)
    }

    updateToDo(id, todo){
        return axios.put(`http://localhost:8080/todo/update/${id}`, todo)
    }

    createToDo(name, todo){
        return axios.put(`http://localhost:8080/todo/createTodo/${name}`, todo)
    }
    
    retriveToDoById(id){
        return axios.get(`http://localhost:8080/todos/getParticularTodo/${id}`)
    }

    addProgress(id, progress){
        return axios.put(`http://localhost:8080/todos/${id}/progress/${progress}`)
    }

    getProgress(id){
        return axios.get(`http://localhost:8080/todos/progress/${id}`)
    }
}

export default new ToDoService()