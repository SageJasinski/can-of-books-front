import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './Styles/BestBook.scss';
import BookItem from './BookCaroselItem';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Dropdown from './AddbookModal';

class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showForm: false,
      showModal: false,
      cover: '',
      title: '',
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  submitListener =(event) => {
    event.preventDefault();

    this.getCover();
    this.createBook({
      title: event.target.title.value,
      description: event.target.description.value,
      status: true,
      cover: {},
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
      // const response = await axios.post(`http://localhost:3002/book`, renderBook);

      const bookData = response.data;
      this.setState({books: [...this.state.books, bookData]})

    } catch (error) {
      console.log('added error: ', error.response)
    }
  }

  getCover = async () => {
    console.log('im here')
    try{
    const API =`https://www.googleapis.com/books/v1/volumes?q=${this.state.title}&key=${process.env.REACT_APP_GOOGLE_BOOK_KEY}&maxResults=1`

      const coverData = await axios.get(API);
      console.log(coverData.data.items[0].volumeInfo.imageLinks.thumbnail);

      this.setState({cover: coverData.data.items[0].volumeInfo.imageLinks.thumbnail});
    }catch(err){
      console.log('cover error: ', err);
    }
  }

  deleteBook = async (bookDelete) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_HEROKU_PATH}/book/${bookDelete._id}`);
      // const response = await axios.delete(`http://localhost:3002/book/${bookDelete._id}`);
      console.log('response status: ', response.status)
      // const bookDeleteData = response.data;
      const filterData = this.state.books.filter(book => {return book._id !== bookDelete._id;});
      this.setState({book: filterData,})
    } catch (error) {
      console.log('delete error: ', error.response);
    }
  }

  showFormHandler = async () =>{
    this.setState(previous => ({
      showForm: !previous.showForm
    }));
  }

  showModalHandler = async () =>{
    this.setState(previous => ({
      showModal: true
    }));
  }
  showModalClose = async () =>{
    this.setState(previous => ({
      showModal: false
    }));
  }
  onChangeHandle = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  updateBook= async(bookToUpdate) => {
    try {
      const path = `${process.env.REACT_APP_HEROKU_PATH}/book/${bookToUpdate._id}`;
      const newBook = await axios.put(path, bookToUpdate);
      const updateArray = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id ? newBook.data : existingBook;
      });

      this.setState({books: updateArray});

    } catch (error) {
      console.log("update error -", error);
    }
  }

  render() {

    /* TODO: render all the books in a Carousel */
    return (
      <>
      <Dropdown 
      Open={this.state.showModal} 
      Hide={this.showModalClose}
      updateBook={this.updateBook}
      >

      </Dropdown>

        <h2 className='title'>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 && 
        <Carousel>
          {this.state.books.map((book, index) => {

            // let newBook = <BookItem src={this.state.cover} title={book.title} alt="Place holder image" description={book.description} deleteBookClick={() => this.deleteBook(book)}/>
            let newBook = <BookItem 
            src="http://lgimages.s3.amazonaws.com/gc-sm.gif" 
            title={book.title} 
            alt="Place holder image" 
            description={book.description} 
            deleteBookClick={() =>this.deleteBook(book)}
            EditClick={this.showModalHandler}
            />

              return <Carousel.Item key={index} data-pause="hover">{newBook}</Carousel.Item>
            }
          )}
        </Carousel>
        }

        {this.state.books.length <= 0 && 
        <h2 className='message'>Your book collection seems to be empty</h2>
        }

        <Button onClick={() => this.showFormHandler()} aria-expanded={this.state.showForm} aria-controls="collapse-form">Add a book</Button>

        <Collapse in={this.state.showForm}>
        <Form onSubmit={this.submitListener}>
          <Form.Label>Add a book!</Form.Label>
          <Form.Group controlId="title">
            <Form.Control placeholder='Enter the title' onChange={this.onChangeHandle}></Form.Control>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Control placeholder='Enter a book description'></Form.Control>
          </Form.Group>

          <Button type="submit">Add Book</Button>
        </Form>
        </Collapse>

      </>
    )
  }
}

export default BestBooks;
