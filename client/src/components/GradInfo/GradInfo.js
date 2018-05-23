import React, { Component } from "react";
import "./GradInfo.css";


class GradInfo extends Component {

    render(){
        return(
            <div className="cell medium-12 large-4">
            <div className="card grad">
                <div className="card-divider">
                    <p>Graduation</p>
                </div>
                <div className="card-section">
                    <h3>{this.props.gradrate}% Graduation Rate</h3>
                    <hr />
                    <h4>${this.props.earnings} Salary After Attending</h4>
                    <p>The median earnings of former students who received federal financial aid, at 10 years after entering the school.</p>
                </div>
            </div>
        </div>
        )
    }
}

export default GradInfo;
