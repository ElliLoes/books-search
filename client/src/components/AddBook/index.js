import React from "react";
import Button from "../Button";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import API from "../../utils/API";

class AddBook extends React.Component {

  postToDB = (book) => {
    var dbBook = {
      title: book.title,
      authors: book.authors,
      description: book.description,
      image: book.image,
      link: book.link
    }

    API.saveBook("/api/books", dbBook)
      .then(res => console.log('added', dbBook, res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={() => { this.postToDB(this.props) }
        }>
          Save Book
        </Button>
      </div>
    );
  }
}

export default AddBook;