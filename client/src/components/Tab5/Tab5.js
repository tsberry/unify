import React, { Component } from "react";
import "./Tab5.css";


class Tab5 extends Component {

    render(){
        return(
        <div className="cell medium-12 large-4">
            <div className="card">
                <div className="card-divider">
                    <h4>Test Scores</h4>
                </div>
                <div className="card-section">
                    <h4>SAT and ACT Scores</h4>
                    <hr />
                    <h3>SAT {this.props.sat}</h3>
                    <h3>ACT {this.props.act}</h3>
                    <p>*Average scores of students who were admitted and enrolled.</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Tab5;