import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './Styles/BestBook.scss';

class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  async getBooks(){

    try {
      const PATH = `http://localhost:3001/books`;
      const request = await axios.get(PATH);

      this.setState({books: request.data})
    } catch (error) {
      console.error(error);
    }
  }

  render() {

    /* TODO: render all the books in a Carousel */
    return (
      <>
        <h2 className='title'>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 && 
        <Carousel>
          {this.state.books.map((book, index) => { 
              return <Carousel.Item key={index} data-pause="hover">{book}</Carousel.Item>
            }
          )}
        </Carousel>
        }

        {this.state.books.length <= 0 && 
        <h2 className='message'>Your book collection seems to be empty</h2>
        }
      </>
    )
  }
}

export default BestBooks;
