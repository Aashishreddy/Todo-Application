import { Component } from "react/cjs/react.development";
import CountComponent from "./CountComponent";

class ListToDos extends Component{
    constructor(props){
        super(props)
        this.state = {           
            todos : [
                        {id: 1, description: 'Fuck this shit', Started: 'NO', StartDate: 'TODAY'},
                        {id: 2, description: 'This is enough; Tunnel Focus', Started: 'NO', StartDate: 'TODAY'},
                        {id: 3, description: 'Get to the next level', Started: 'NO', StartDate: 'TODAY'},
                        {id: 4, description: 'Work on AWS Cloud Computing Fundamentals', Started: 'NO', StartDate: 'FEB 12, 2022', TimeFrame: '45 Days'},
                        {id: 5, description: 'Health', Started: 'NO', StartDate: 'FEB 14, 2022', TimeFrame: '5 Months'},
                        {id: 6, description: 'Read Self Improvement Books', Started: 'NO', StartDate: 'FEB 12, 2022', TimeFrame: 'Always'},
                        {id: 7, description: 'Gym', Started: 'YES', StartDate: 'FEB 12, 2022', TimeFrame: 'Always'}
            ],
        }
    }

    render(){
        return(
            <div className="ListToDos">
                <h1>List of ToDos</h1>
                <div className="container">
                    {/* bootstrap works around classNames */}
                            <table className="table"> 
                                <tr>
                                    <th>Order:</th>
                                    <th>Description:</th>
                                    <th>Started:</th>
                                    <th>Time Frame:</th>
                                    <th>Count:</th>
                                </tr>          
                            {/* Understand when to use flower braces, normal ones' */}
                            {
                                this.state.todos.map(
                                    todo => 
                                            <tr key={todo.id}>
                                                <td>{todo.id}</td>
                                                <td>{todo.description}</td>
                                                <td>{todo.Started}</td>
                                                <td>{todo.StartDate}</td>
                                                {/* Create another component to repeat a functionality */}
                                                <td><CountComponent /></td>
                                            </tr>
                                )
                            }
                    </table>
                </div>
            </div>
        )
    }
}

export default ListToDos;

