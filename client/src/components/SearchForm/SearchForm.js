import React, { Component } from 'react';
import "./SearchForm.css";
import Autosuggest from "react-autosuggest";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class SearchForm extends Component {

  render() {

    const inputProps = {
      value: this.props.school,
      onChange: this.props.onChange
    };

    return (
      <div className="cell large-12">
        <form className="grid-container search">
          <div className="grid-x grid-margin-x title">
            <div className="cell"><h4>Search</h4></div>
          </div>
          <div className="grid-x grid-margin-x">
            <div className="small-12 medium-3 large-3 cell">
              <label>School Name
              <Autosuggest
                  suggestions={this.props.suggestions}
                  onSuggestionsFetchRequested={this.props.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.props.onSuggestionsClearRequested}
                  onSuggestionSelected={this.props.onSuggestionSelected}
                  getSuggestionValue={this.props.getSuggestionValue}
                  renderSuggestion={this.props.renderSuggestion}
                  inputProps={inputProps}
                  id="school"
                />
              </label>
            </div>
            <div className="medium-3 large-3 cell">
              <label>State
              <select onChange={this.props.handleInputChange} className="select-state" name="state">
                <option value="none">Any</option>
                
                <option value="AL">Alabama</option>
                
                <option value="AK">Alaska</option>
                
                <option value="AS">American Samoa</option>
                
                <option value="AZ">Arizona</option>
                
                <option value="AR">Arkansas</option>
                
                <option value="CA">California</option>
                
                <option value="CO">Colorado</option>
                
                <option value="CT">Connecticut</option>
                
                <option value="DE">Delaware</option>
                
                <option value="DC">District of Columbia</option>
                
                <option value="FM">Federated States of Micronesia</option>
                
                <option value="FL">Florida</option>
                
                <option value="GA">Georgia</option>
                
                <option value="GU">Guam</option>
                
                <option value="HI">Hawaii</option>
                
                <option value="ID">Idaho</option>
                
                <option value="IL">Illinois</option>
                
                <option value="IN">Indiana</option>
                
                <option value="IA">Iowa</option>
                
                <option value="KS">Kansas</option>
                
                <option value="KY">Kentucky</option>
                
                <option value="LA">Louisiana</option>
                
                <option value="ME">Maine</option>
                
                <option value="MD">Maryland</option>
                
                <option value="MA">Massachusetts</option>
                
                <option value="MI">Michigan</option>
                
                <option value="MN">Minnesota</option>
                
                <option value="MS">Mississippi</option>
                
                <option value="MO">Missouri</option>
                
                <option value="MT">Montana</option>
                
                <option value="NE">Nebraska</option>
                
                <option value="NV">Nevada</option>
                
                <option value="NH">New Hampshire</option>
                
                <option value="NJ">New Jersey</option>
                
                <option value="NM">New Mexico</option>
                
                <option value="NY">New York</option>
                
                <option value="NC">North Carolina</option>
                
                <option value="ND">North Dakota</option>
                
                <option value="MH"> Marshall Islands</option>
                
                <option value="MP">Northern Mariana Islands</option>
                
                <option value="OH">Ohio</option>
                
                <option value="OK">Oklahoma</option>
                
                <option value="OR">Oregon</option>
                
                <option value="PW">Palau</option>
                
                <option value="PA">Pennsylvania</option>
                
                <option value="PR">Puerto Rico</option>
                
                <option value="RI">Rhode Island</option>
                
                <option value="SC">South Carolina</option>
                
                <option value="SD">South Dakota</option>
                
                <option value="TN">Tennessee</option>
                
                <option value="TX">Texas</option>
                
                <option value="UT">Utah</option>
                
                <option value="VT">Vermont</option>
                
                <option value="VI">Virgin Islands</option>
                
                <option value="VA">Virginia</option>
                
                <option value="WA">Washington</option>
                
                <option value="WV">West Virginia</option>
                
                <option value="WI">Wisconsin</option>
                
                <option value="WY">Wyoming</option>
                
              </select>
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
        </form>
      </div>
    )
  }
}

export default SearchForm;
