import { Component } from "react/cjs/react.development";
import ToDoService from "./Api/ToDoService";
import AuthenticationService from "./AuthenticationService";
import CountComponent from "./CountComponent";

class ListToDos extends Component{
    constructor(props){
        super(props)
        this.state = {           
            todos : [],
            message : null,
            countMsg : null
        }
    }

    componentWillUnmount(){
        console.log("Component Unmount")
    }

    componentDidMount(){
        console.log("Component Did Mount")
        this.refreshToDos()
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate")
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    refreshToDos = () => {
        let userName = AuthenticationService.getUserName()
        ToDoService.getToDos(userName)
        .then( response => this.setState({ todos: response.data }) )
    }

    deleteSelectedToDo = (id) =>{
        let userName = AuthenticationService.getUserName()
        console.log(id + " " + userName)
        ToDoService.deleteToDo(userName, id)
        .then( 
            response => {
                this.setState({ message: `Delete of todo ${id}`})
                this.refreshToDos()
            }
        )
    }

    updateSelectedToDo = (id) => {
        console.log(id + " Updated") 
        this.props.navigate(`/todos/update/${id}`)
    }

    IncreaseCount = (id) => {
        ToDoService.countUp(id)
        .then(
            response => {
                this.setState({ countMsg : `Count of ${id} increased`})
                this.refreshToDos()
            }
        )
    }

    
    render(){
        console.log("render")
        return(
            <div className="ListToDos">
                <h1 className="todosHeading">List of Tasks</h1>
                <div className="container">
                            <table className="table"> 
                                <tr>
                                    <th>Task ID:</th>
                                    <th>Task Description:</th>
                                    <th>Status:</th>
                                    <th>Start Date:</th>
                                    <th>Time Frame:</th>
                                    <th>Count:</th>
                                    <th>Update:</th>
                                    <th>Delete:</th>
                                </tr>          
                            {
                                this.state.todos.map(
                                    todo => 
                                            <tr key={todo.order_id}>
                                                <td>{todo.order_id}</td>
                                                <td>{todo.description}</td>
                                                <td>{todo.started}</td>
                                                <td>{todo.startDate}</td>
                                                <td>{todo.timeFrame}</td>
                                                <td>{todo.count} <nbsp/>
                                                <button className="btn btn-success" 
                                                        onClick={() => this.IncreaseCount(todo.order_id)}>
                                                            Count+</button>
                                                    </td>
                                                <td><button className="btn btn-warning" 
                                                        onClick={() => this.updateSelectedToDo(todo.order_id)}> 
                                                        Update</button></td>    
                                                <td><button className="btn btn-warning" 
                                                        onClick={() => this.deleteSelectedToDo(todo.order_id)}> 
                                                        Delete</button></td>
                                                        {/* onClick syntax is different because we need to send parameters. */}
                                            </tr>
                                )
                            }
                    </table>
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    {this.state.countMsg && <div className="alert alert-success">{this.state.countMsg}</div>}
                </div>
            </div>
        )
    }
}

export default ListToDos;

