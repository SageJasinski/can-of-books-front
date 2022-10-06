import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Dropdown extends React.Component{


    formSubmission = (event) =>{
        event.preventDefault();

        const bookUpdateModel = {
            Title: event.target.title.value || this.props.book.title,
            Description: event.target.description.value || this.props.book.description,
            _id: this.props.book._id,
        }
        this.props.updateBook(bookUpdateModel);
    }
    render(){
        return(
            <Modal show={this.props.Open} onHide={this.props.Hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit: {this.props.bookTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control placeholder="Edit Title"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control placeholder="Edit Description"></Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={this.formSubmission}>Update This Book</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default Dropdown;