import React, { Component } from "react";
import "./TestScores.css";


class TestScores extends Component {

    render(){
        return(
        <div className="cell medium-12 large-4">
            <div className="card scores">
                <div className="card-divider">
                    <p>Test Scores</p>
                </div>
                {(this.props.act && this.props.sat > 0) ?
                <div className="card-section">
                    <h4>SAT and ACT Scores</h4>
                    <hr />
                    <h3>SAT {this.props.sat}</h3>
                    <h3>ACT {this.props.act}</h3>
                    <p>*Average scores of students who were admitted and enrolled.</p>
                </div> :
                <div className="card-section">
                    <h4>SAT and ACT Scores</h4>
                    <hr />
                    <p>These test scores are not considered by this school.</p>
                </div>}
            </div>
        </div>
        )
    }
}

export default TestScores;