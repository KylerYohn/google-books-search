import React, { Component } from "react";
import API from "../utiil/API";
import Jumbotron from "../components/Jumbotron";
import RenderSaved from "../components/renderSaved";

class Saved extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    this.loadSaved();
  }

  consoleLog = () => {
    console.log(this.state.books);
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  loadSaved = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Books you saved!</h1>
        </Jumbotron>
        <RenderSaved loadSaved={this.loadSaved()} results={this.state.books} />
      </div>
    );
  }
}

export default Saved;
