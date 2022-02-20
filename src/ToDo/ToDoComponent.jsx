import { Field, Form, Formik } from "formik";
import moment from "moment";
import { Component } from "react/cjs/react.development";

class ToDoComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.params.id,
            description: "Learn Forms Now",
            // targetDate: moment(new Date()).format('YYYY-MM-DD')
            targetDate: "2022-02-22"
        }
    }

    onSubmit = (values) => {
        console.log(values)
    }

    render(){
        let {description, targetDate} = this.state
        //let targetDate = this.state.targetDate
        return(
            <div className="ToDo">
                <h1>ToDo</h1>
                {/* comes from the URL at Route. */}
                <h3>{this.props.params.id} </h3>   <hr />
                <div className="container">
                    <Formik initialValues={{ description, targetDate }}
                            onSubmit = {this.onSubmit}>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name= "description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" name= "targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Submit</button>
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