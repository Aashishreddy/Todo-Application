import React, { useState } from "react";
import {Modal} from 'react-bootstrap';
import {Button} from "reactstrap";
import ToDoService from "./Api/ToDoService";
import {useParams} from "react-router-dom";

function ProgressFunction(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState(""); // name is used to store progress in db
    const { id } = useParams();  // Used to get Params from URL
    const [progress , setProgress] = useState("");

    function callingProg(){
        ToDoService.addProgress(id, name)
        .then( response => {console.log(response)} )    
        handleClose()
    }

    function handleChange(event){
        setName(event.target.value)
    }

    function getProg(){
        ToDoService.getProgress(id)
        .then( response => {
            setProgress(response.data)
        })
    }
  
    return (
      <div className="progressFunction">
       
        <Button type="button" className="btn btn-success" onClick={() => getProg()}>Get Present Progress</Button>  <br /> <br />
        {/* Showing progress only when value is not empty */}
        {progress && progress} 
        <hr />
        <Button className="btn btn-info progressButton" onClick={handleShow}>
            Update Progress of {id}
        </Button>
  
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Updating Progress</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <input type="text" name="name" onChange={handleChange} value={name}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={callingProg}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  
  
  export default ProgressFunction;
  //render(<ProgressFunction />);