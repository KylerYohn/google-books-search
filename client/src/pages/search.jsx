import React, { Component } from "react";
import API from "../utiil/API";
import Jumbotron from "../components/Jumbotron";
import { Input, Btn } from "../components/form";
import Card from "../components/card";
import BookList from "../components/bookList";

class Search extends Component {
  state = {
    books: [],
    search: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const search = this.state.search;
    console.log("button hits");
    if (search) {
      API.findBooks(search)
        .then(data => {
          console.log(data);
          this.setState({ books: data.data.items });
        })
        .catch(err => {
          if (err) throw err;
        });
    }
  };

  handleBookSave = (data, event) => {
    event.preventDefault();
    const Saved = {
      title: data.volumeInfo.title,
      authors: data.volumeInfo.authors,
      description: data.volumeInfo.description,
      image: data.volumeInfo.imageLinks.smallThumbnail,
      link: data.volumeInfo.previewLink
    };
    API.saveBook(Saved);
    alert("your book has been saved!");
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Search Some Books!</h1>
        </Jumbotron>
        <Card>
          <form>
            <Input
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              placeholder="Book name (required)"
            />
            <Btn onClick={this.handleFormSubmit} disabled={!this.state.search}>
              submit
            </Btn>
          </form>
        </Card>
        <BookList
          id={this.state.books.id}
          key={this.state.books.id}
          results={this.state.books}
          onClick={this.handleBookSave}
        />
      </div>
    );
  }
}

export default Search;
