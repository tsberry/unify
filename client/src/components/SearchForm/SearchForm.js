import React, { Component } from 'react';
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class SearchForm extends Component {

  render() {
    return (
      <form className="grid-container search">
        <div className="form-group">
          <div className="grid-x grid-padding-x title">
            <div className="cell"><h4>Search</h4></div>
          </div>
          <div className="grid-x grid-padding-x">
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
