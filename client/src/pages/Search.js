import React, { Component } from "react";
//import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";

//import SearchResults from "../components/SearchResults";


class Search extends Component {
  
  state = {
    state: "",
    zipcode: "",
    radius: "",
    schools: []
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState ({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchColleges(this.state.search)
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      this.setState({ results: res.data.message, error: "" });
    })
    .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
        <div>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              state={this.state.state}
              zipcode={this.state.zipcode}
              radius={this.state.radius}
            />
            <SearchResults/>
        </div>
    );
  }
}

export default Search;
