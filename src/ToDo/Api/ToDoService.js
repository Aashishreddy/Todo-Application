import axios from "axios";

class ToDoService{
    getToDos(name){
        return axios.get(`http://localhost:8080/users/${name}/todos`)
    }

    deleteToDo(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }

    countUp(id){
        return axios.get(`http://localhost:8080/users/increaseCount/${id}`)
    }
    
}

export default new ToDoService()