import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
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
              <List>
                {this.state.savedBooks.map(book => {
                  console.log(book)
                  return (
                    <div>
                      <List
                        key={book._id}
                        authors={book.authors}
                        title={book.title}
                        description={book.description}
                        link={book.link}
                        image={book.image}
                      />
                      <DeleteBtn
                        onClick={() => this.deleteFromDB(book._id)}
                      />
                    </div>
                  )

                })}
              </List>
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
