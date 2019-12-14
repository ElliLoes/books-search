import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row } from "../../components/Grid";
import { BookList, BookListItem } from "../../components/List";
import NoBooks from '../../components/NoBooks';

class Saved extends Component {
  state = {
    savedBooks: [],
    initialized: true
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => 
        this.setState({ savedBooks: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Row>
          <Col size="md-12">
            {this.state.savedBooks.length > 0 ?
              <BookList>
                {this.state.savedBooks.map(book => {
                  console.log(book)
                  return (
                    <div>
                      <BookListItem
                        key={book._id}
                        authors={book.authors}
                        title={book.title}
                        description={book.description}
                        link={book.link}
                        image={book.image}
                      />
                      <DeleteBtn
                        onClick={() => this.deleteBook(book._id)}
                      />
                    </div>
                  )

                })}
              </BookList>
              :
              <NoBooks />
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Saved;
