import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './Styles/BestBook.scss';
import BookItem from './BookCaroselItem';

class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  async getBooks(){

    try {
      const PATH = `${process.env.REACT_APP_HEROKU_PATH}/books`;
      const request = await axios.get(PATH);

      this.setState({books: request.data})
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount = async () => {
    try {
      const PATH = `${process.env.REACT_APP_HEROKU_PATH}/book`;
      const request = await axios.get(PATH);
      this.setState({books: request.data});
      console.log(request.data);
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

            let newBook = <BookItem src="https://via.placeholder.com/150" title={book.title} alt="Place holder image" description={book.description}/>

              return <Carousel.Item key={index} data-pause="hover">{newBook}</Carousel.Item>
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
