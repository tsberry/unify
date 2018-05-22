import React, { Component } from 'react';
import "./SearchForm.css";
import API from '../../utils/API';
import Autosuggest from "react-autosuggest";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class SearchForm extends Component {

  state = {
    schoolList: [],
    school: "",
    schoolId: null,
    suggestions: []
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


  render() {

    const inputProps = {
      value: this.state.school,
      onChange: this.onChange
    };

    return (
      <form className="grid-container search">
        <div className="form-group">
          <div className="grid-x grid-padding-x title">
            <div className="cell"><h4>Search</h4></div>
          </div>
          <div className="grid-x grid-padding-x">
            <div className="small-12 medium-3 large-3 cell">
              <label>School Name
              <Autosuggest
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected={this.onSuggestionSelected}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
                id="school"
              />
              </label>
            </div>
            <div className="medium-3 large-3 cell">
              <label>State
              <input type="text" name="state" value={this.props.state} onChange={this.props.handleInputChange} />
              </label>
            </div>
            <div className="medium-3 large-3 cell">
              <label>Zip Code
              <input type="text" name="zipcode" value={this.props.zipcode} onChange={this.props.handleInputChange} />
              </label>
            </div>
            <div className="medium-2 large-1 cell">
              <label>Within
              <input type="text" name="radius" placeholder="Miles" value={this.props.radius} onChange={this.props.handleInputChange} />
              </label>
            </div>
            <div className="medium-2 large-2 cell">
              <button type="submit" onClick={this.props.handleFormSubmit} className="button">Submit</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchForm;
