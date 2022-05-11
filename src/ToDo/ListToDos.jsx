import { Tooltip } from "bootstrap";
import { Component } from "react/cjs/react.development";
import ToDoService from "./Api/ToDoService";
import AuthenticationService from "./AuthenticationService";
import CountComponent from "./CountComponent";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import ProgressFunction from "./ProgressFunction";
import ToolTipFunction from "./ToolTipFunction";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";


class ListToDos extends Component{
    constructor(props){
        super(props)
        this.state = {           
            todos : [],
            popoverOpen: false,
            showModal: false,
            toolTipOpen: false
        }
    }

    componentWillUnmount(){
        // console.log("Component Unmount")
    }

    componentDidMount(){
        // console.log("Component Did Mount")
        // To get the data from backend directly with a button
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
                this.refreshToDos()
                toast.error(`Task ${id} Deleted`)
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
                this.refreshToDos()
            }
        )
    }

    toggleToolTip = () => {    
        this.setState({ toolTipOpen: !this.state.toolTipOpen })  
    }


    togglePopover = () => {    
        this.setState({ popoverOpen: !this.state.popoverOpen })  
    }

    addNewTodo = () => {
        // console.log("New Todo")
        this.props.navigate("/addTodo")
    }

    callProgress = (id) => {
        this.props.navigate(`/todos/${id}/progress`)
    }

    render(){
        const { popoverOpen } = this.state;
        // console.log("render")
        return(
            <div className="ListToDos">
                 <div className="NewTodo">
                    <button className="btn btn-success" onClick={this.addNewTodo}>Add New Task</button>
                </div>
                <h1 className="todosHeading">List of Tasks</h1> 
               
                <div className="container">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Task ID:</th>
                                        <th>Task Description:</th>
                                        <th>Progress:</th>
                                        <th>Status:</th>
                                        <th>Start Date:</th>
                                        <th>Time Frame:</th>
                                        <th>Count:</th>
                                        <th>Update:</th>
                                        <th>Delete:</th>
                                    </tr>  
                                </thead> 
                               <tbody>       
                                {   
                                    this.state.todos.map(
                                        todo => 
                                                <tr key={todo.id}>
                                                    <td>{todo.id}</td> 
                                                    <td>{todo.description}</td> 
                                                    <td><button className="btn btn-info" 
                                                         onClick={() => this.callProgress(todo.id)}>View progress</button></td>   
                                                    <td>{todo.started}</td>
                                                    <td>{todo.start_date}</td>
                                                    <td>{todo.time_frame}</td>
                                                    <td>{todo.count} <nbsp/> 
                                                    <Button id="mypopover" className="btn btn-success countButton" type="button"
                                                            data-tip data-for="registerTip" 
                                                            onClick={() => this.IncreaseCount(todo.id)} >
                                                                Count+</Button>
                                                            <ReactTooltip id="registerTip" place="top" effect="solid" >
                                                                Count Increased
                                                            </ReactTooltip>
                                                        </td> 
                                                    <td><button className="btn btn-secondary" 
                                                            onClick={() => this.updateSelectedToDo(todo.id)}> 
                                                            Update</button></td>    
                                                    <td><button className="btn btn-secondary" 
                                                            onClick={() => this.deleteSelectedToDo(todo.id)}> 
                                                            Delete</button></td>
                                                            {/* onClick syntax is different because we need to send parameters. */}
                                                </tr>
                                    )
                                }
                            </tbody> 
                    </table>
                    {/* {this.state.message && <div className="alert alert-success">{this.state.message}</div>} */}
                    {/* {this.state.countMsg && <div className="alert alert-success">{this.state.countMsg}</div>} */}
                </div>
            </div>
        )
    }
}

export default ListToDos;

