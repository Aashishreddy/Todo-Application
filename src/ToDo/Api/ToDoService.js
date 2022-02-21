import axios from "axios";

class ToDoService{
    getToDos(name){
        return axios.get(`http://localhost:8081/todo/getTodos/${name}`)
    }

    deleteToDo(name, id){
        return axios.delete(`http://localhost:8081/todo/${name}/delete/${id}`)
    }

    countUp(id){
        return axios.get(`http://localhost:8081/users/increaseCount/${id}`)
    }

    updateToDo(id, todo){
        return axios.put(`http://localhost:8081/todo/update/${id}`, todo)
    }

    createToDo(name, todo){
        return axios.put(`http://localhost:8081/todo/createTodo/${name}`, todo)
    }
    
    retriveToDoById(id){
        return axios.get(`http://localhost:8081/todos/getParticularTodo/${id}`)
    }
}

export default new ToDoService()