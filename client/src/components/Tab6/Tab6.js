import React, { Component } from "react";
import "./Tab6.css";


class Tab6 extends Component {

    render(){
        return(
        <div className="cell large-12">
            <div className="card">
                <div className="card-divider">
                    <h4>Student Body</h4>
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

export default Tab6;