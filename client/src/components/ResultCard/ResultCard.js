import React, { Component } from "react";
import "./ResultCard.css";


class ResultCard extends Component {

  render(){
    return(
      <div className="grid-container callout secondary result" onClick= {() => this.props.getInfo(this.props.id)}>
        <h4>{this.props.name}</h4>
        <p>{this.props.city}, {this.props.state}</p>
        <p>{this.props.students} Undergraduate Students</p>

        <div className="grid-x">
          <div className="large-1 cell">{this.props.years}</div>
          <div className="large-1 cell">{this.props.location}</div>
          <div className="large-1 cell">{this.props.size}</div>
          <div className="large-3 cell">{this.props.ownership}</div>
        </div>
      </div>
    )
  }


}

export default ResultCard;
