import React from "react";
import Button from "react-bootstrap/Button";

class BookItem extends React.Component{
    constructor(props){
        super(props);
        this.satte = {

        }
    };

    deleteBook = async () =>{

    }

    render(){
        return(
            <>
                <h3>{this.props.title}</h3>

                <img
                src={this.props.src}
                alt={this.props.alt}
                />
            
                <p>{this.props.description}</p>
                <Button className="delete" onClick={this.props.deleteBookClick}>Delete</Button>
            </>
        )
    }

};

export default BookItem;