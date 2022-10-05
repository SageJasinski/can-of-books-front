import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './Styles/BestBook.scss';
import BookItem from './BookCaroselItem';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  submitListener =(event) => {
    event.preventDefault();

    this.createBook({
      title: event.target.title.value,
      description: event.target.description.value,
      status: true,
    })
      
  }

  componentDidMount = async () => {
    try {
      const PATH = `${process.env.REACT_APP_HEROKU_PATH}/book`;
      // const PATH = `http://localhost:3002/book`
      const request = await axios.get(PATH);
      this.setState({books: request.data});
      console.log(request.data);
    } catch (error) {
      console.error(error);
    }
  }

  createBook = async (renderBook) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_HEROKU_PATH}/book`, renderBook);
      const bookData = response.data;
      this.setState({books: [...this.state.books, bookData]})
    } catch (error) {
      console.log('added error: ', error.response)
    }
  }

  deleteBook = async (bookDelete) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_HEROKU_PATH}/book/${bookDelete._id}`);
      console.log('response status: ', response.status)
      // const bookDeleteData = response.data;
      const filterData = this.state.books.filter(book => {return book._id !== bookDelete._id;});
      this.setState({book: filterData,})
    } catch (error) {
      console.log('delete error: ', error.response);
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

            let newBook = <BookItem src="https://via.placeholder.com/150" title={book.title} alt="Place holder image" description={book.description} deleteBookClick={() => this.deleteBook(book)}/>

              return <Carousel.Item key={index} data-pause="hover">{newBook}</Carousel.Item>
            }
          )}
        </Carousel>
        }

        {this.state.books.length <= 0 && 
        <h2 className='message'>Your book collection seems to be empty</h2>
        }

        <Form onSubmit={this.submitListener}>
          <Form.Group controlId="title">
            <Form.Label>Add a book!</Form.Label>
            <Form.Control placeholder='Enter the title'></Form.Control>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Control placeholder='Enter a book description'></Form.Control>
          </Form.Group>

          <Button type="submit">Add Book</Button>
        </Form>
        
      </>
    )
  }
}

export default BestBooks;
