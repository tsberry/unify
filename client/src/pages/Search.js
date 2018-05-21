import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import ResultCard from "../components/ResultCard";
import Container from "../components/Container"

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
    API.searchColleges(this.state.zipcode, this.state.radius)
    .then(res => {
      this.setState ({
        schools: res.data
      });
    })
    .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
        <Container>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              state={this.state.state}
              zipcode={this.state.zipcode}
              radius={this.state.radius}
            />
            <ul>
              {this.state.schools.map(school => (
                <ResultCard
                  name = {school.name}
                  city = {school.city}
                  state = {school.state}
                  students = {school.students}
                  years = {school.type}
                  ownership = {school.ownership}
                  location = {school.location}
                  size = {school.size}
                />
              ))}
            </ul>
        </Container>
    );
  }
}

export default Search;
