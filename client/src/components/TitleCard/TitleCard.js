import React, { Component } from "react";
import "./TitleCard.css";

class TitleCard extends Component {
    render() {
        return (
            <div className="cell large-12">
                <div className="callout secondary title">
                    
                    <h2>{this.props.name}{this.props.isAlum ? "" : <span className={this.props.saved ? "fa fa-star favorite saved" : "fa fa-star favorite"} onClick={this.props.starAction}></span>}</h2>
                    <p>{this.props.city}, {this.props.state}</p>
                    <a href={`http://${this.props.url}`} target="_blank">{this.props.url}</a>
                </div>
            </div>
        );
    }
}

export default TitleCard