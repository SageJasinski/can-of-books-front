import React from "react";
import Button from "react-bootstrap/Button";

class BookItem extends React.Component{

    render(){
        return(
            <>
                <h3>{this.props.title}</h3>

                <img
                src={this.props.src}
                alt={this.props.alt}
                />
            
                <p>{this.props.description}</p>

                <div className="sideButton">
                <Button className="delete" onClick={() => this.props.deleteBookClick(this.props.book)}>Delete</Button>
                <Button className="Edit" onClick={this.props.EditClick}>Edit</Button>
                </div>
            </>
        )
    }

};

export default BookItem;