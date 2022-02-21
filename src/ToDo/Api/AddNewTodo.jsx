import { Field, Form, Formik } from "formik";
import moment from "moment";
import { Component } from "react/cjs/react.development";
import AuthenticationService from "../AuthenticationService";
import ToDoService from "./ToDoService";

class AddNewTodo extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: '',
            description: '',
            started: '',
            start_date: '',
            time_frame: '',
            count: 0,
            createMsg: ''
        }
    }

    onSubmit = (values) => {
        console.log(values)
        let userName = AuthenticationService.isUserLoggedIn()
        ToDoService.createToDo(userName, values)
        .then(response => {
            this.setState({ createMsg:'New Task Created' })
            this.props.navigate("/todos")
        })
    }

    render(){
        let {id, description, started, start_date, time_frame, count} = this.state
        return(
            <div className="AddNewTodo">
                <br />
                <h1>Adding New Task</h1>
                <br />
                <div className="container">
                    <Formik initialValues={{ id, description, started, start_date, time_frame, count }}
                            onSubmit = {this.onSubmit}>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Task ID</label>
                                        <Field className="form-control" type="" name= "id"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Task Description</label>
                                        <Field className="form-control" type="text" name= "description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Status</label>
                                        <Field className="form-control" type="text" name= "started"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Start Date</label>
                                        <Field className="form-control" type="text" name= "start_date"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Time Frame</label>
                                        <Field className="form-control" type="text" name= "time_frame"/>
                                    </fieldset>
                                    <br />
                                    <button className="btn btn-success" type="submit">Submit</button>
                                    <br />
                                    {this.state.createMsg && <div className="alert alert-warning">{this.state.createMsg}</div>}
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default AddNewTodo