import Axios from "axios";

const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  findBooks: function(query) {
    return Axios.get(baseURL + query);
  },

  getBooks: function() {
    return Axios.get("/api/saved");
  },

  deleteBook: function(id) {
    return Axios.delete("/api/saved/" + id);
  },

  saveBook: function(Book) {
    return Axios.post("api/saved", Book);
  }
};
