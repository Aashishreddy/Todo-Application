import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";
import { Component } from "react/cjs/react.development";
import ToDoService from "./Api/ToDoService";

class ToDoComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.params.id,
            description: "",
            // targetDate: moment(new Date()).format('YYYY-MM-DD')
            started: "",
            start_date: "",
            time_frame: "",
            count: 0,
            updateMessage: ''
        }
    }

    onSubmit = (values) => {
        //passing values as RequestBody
        ToDoService.updateToDo(this.props.params.id, values)
        .then(
            response => {
                this.setState({ updateMessage: `${this.props.params.id} Updated`})
                this.props.navigate("/todos")
            }
        )
    }

    getInitialValues = () => {
        ToDoService.retriveToDoById(this.props.params.id)
        .then( response => {
            this.setState({
                            description: response.data.description, 
                            started: response.data.started,
                            start_date: response.data.start_date,
                            count: response.data.count
                        })
        })
    }
 
    validate = (values) => {
        let errors = {}
        if(values.description.length < 5){
            errors.description = 'Enter a Valid description '
        }
        console.log(values)
        return errors;
    }

    render(){
        let {id, description, started, start_date, time_frame, count} = this.state
        //let targetDate = this.state.targetDate
        return(
            <div className="ToDo">
                <h1>Task Being Updated</h1>
                <button onClick={this.getInitialValues}>Get Initial Values</button>
                {/* comes from the URL at Route. */}
                <h3>{this.props.params.id} </h3>   <hr />
                <div className="container">
                    <Formik initialValues={{ id, description, started, start_date, time_frame, count }}
                            onSubmit = {this.onSubmit}>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>ID</label>
                                        <Field className="form-control" type="" name= "id"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name= "description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Started</label>
                                        <Field className="form-control" type="text" name= "started"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Start Date</label>
                                        <Field className="form-control" type="text" name= "start_date"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Time Frame</label>
                                        {/* name field sets the intial values in the form */}
                                        <Field className="form-control"  type="text" name= "time_frame"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Count</label>
                                        <Field className="form-control" type="text" name= "count"/>
                                    </fieldset>
                                    <br />
                                    <button className="btn btn-success" type="submit">Submit</button>
                                    <br />
                                    {this.state.updateMessage && <div className="alert alert-success">{this.state.updateMessage}</div>}
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default ToDoComponent