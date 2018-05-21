import React from "react";
import "./SearchResults.css";
import RankingTab from "../RankingTab";

const SearchResults = props => (
 
  <div className="grid-container callout secondary">
    <div className="grid-x grid-padding-x title">
      <div className="large-12 cell"><h3>{props.name}</h3></div>
    </div>
    <div className="grid-x grid-padding-x title">
      <div className="large-12 cell"><p>{props.city}, {props.state}</p></div>
    </div>
    <div className="grid-x grid-padding-x title">
      <div className="large-12 cell"><p>{props.students} Undergraduate Students</p></div>
    </div>
    <div className="grid-x grid-padding-x title">
      <div className="large-12 cell"><p>Link</p></div>
    </div>
    <div className="grid-x grid-padding-x title">
      <div className="large-1 cell">{props.years}</div>
      <div className="large-1 cell">{props.ownership}</div>
      <div className="large-1 cell">{props.locationType}</div>
      <div className="large-1 cell">Medium</div>
    </div>

    <RankingTab/>
  </div>



);

export default SearchResults;
