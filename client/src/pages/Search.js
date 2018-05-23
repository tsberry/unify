import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import ResultCard from "../components/ResultCard";
import Container from "../components/Container"
import GridContainer from "../components/GridContainer";
import GridX from "../components/GridX";
//import AuthService from "../components/AuthService";
//const auth = new AuthService();
//import SearchResults from "../components/SearchResults";


class Search extends Component {
  
  state = {
    state: "none",
    zipcode: "",
    radius: "",
    schools: [],
    schoolList: [],
    school: "",
    schoolId: "",
    suggestions: []
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState ({
      [name]: value
    });
  };

  componentWillMount() {
    API.getSchoolList()
      .then(res => {
        this.setState({ schoolList: res.data });
        console.log(this.state.schoolList);
      });
  }

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.state.schoolList.filter(school =>
      school.NAME.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  getSuggestionValue = suggestion => suggestion.NAME;

  // Use your imagination to render suggestions.
  renderSuggestion = suggestion => (
    <div>
      {suggestion.NAME} ({suggestion.ID})
    </div>
  );

  onChange = (event, { newValue }) => {
    this.setState({
      school: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    event.preventDefault();
    this.setState({
      school: `${suggestionValue} (${suggestion.ID})`,
      schoolId: suggestion.ID
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let id = this.state.schoolId;
    let state = this.state.state;
    let zipcode = this.state.zipcode;
    let radius = this.state.radius;
    if(id.toString().length !== 6) id = "none";
    if(zipcode === "") zipcode = "none";
    if(radius === "") radius = "none";
    API.searchColleges(id, state, zipcode, radius)
    .then(res => {
      this.setState ({
        schools: res.data
      });
    })
    .catch(err => this.setState({ error: err.message }));
  };

  getInfo = id => {
    this.props.history.push(`/info/${id}`)
  }

  render() {
    return (
        <Container>
          <GridContainer>
            <GridX>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              school={this.state.school}
              state={this.state.state}
              zipcode={this.state.zipcode}
              radius={this.state.radius}
              onChange={this.onChange}
              suggestions={this.state.suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              onSuggestionSelected={this.onSuggestionSelected}
              getSuggestionValue={this.getSuggestionValue}
              renderSuggestion={this.renderSuggestion}
            />
            </GridX>

            <GridX>
              {this.state.schools.map(school => (
                <ResultCard
                  getInfo={this.getInfo}
                  id={school.id}
                  name = {school.name}
                  city = {school.city}
                  state = {school.state}
                  students = {school.students}
                  years = {school.type}
                  ownership = {school.ownership}
                  location = {school.location}
                  size = {school.size}
                  page="search"
                  key={school.id}
                />
              ))}
            </GridX>
            </GridContainer>
        </Container> 
    );
  }
}

export default Search;


// {(auth.loggedIn()) ? : <div><h3>Please login to search for schools</h3></div>} 
