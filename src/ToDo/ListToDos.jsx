import { Component } from "react/cjs/react.development";

class ListToDos extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [
                        {id: 1, description: 'Fuck this shit', Date: new Date()},
                        {id: 2, description: 'This is enough', Date: new Date()},
                        {id: 3, description: 'Get to the next level', Date: new Date()}
            ]     
        }
    }

    render(){
        return(
            <div className="ListToDos">
                <h1>List of ToDos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID:</th>
                            <th>Description:</th>
                            <th>Date:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Understand when to use flower braces, normal ones' */}
                        {
                        this.state.todos.map(
                            todo => 
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.Date.toString()}</td>
                                    </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListToDos;