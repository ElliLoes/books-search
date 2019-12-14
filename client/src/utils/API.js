import axios from "axios";

const base = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001'

export default {
  // Gets all books
  getBooks: function() {
    return axios.get(base + "/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get(base + "/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete(base + "/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post(base + "/api/books", bookData);
  }
};
