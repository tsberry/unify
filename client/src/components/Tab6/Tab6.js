import React, { Component } from "react";
import "./Tab6.css";
import Ethnicity from "../Ethnicity/Ethnicity";


class Tab6 extends Component {

    render(){
        return(
        <div className="cell large-12">
            <div className="card">
                <div className="card-divider">
                    <p>Student Body</p>
                </div>
                    <div className="card-section">
                        <div className="grid-x grid-padding-x">
                            <div className="cell large-5">
                                <h4>{this.props.students} Undergraduate Students</h4>
                                <h3>{this.props.fulltime}% Full-time</h3>
                                <h3>{this.props.parttime}% Part-time</h3>
                            </div>
                            <div className="cell large-7 scales">
                                <h4><b>Race/Ethnicity</b></h4>
                                {this.props.races.map(race => (
                                        <Ethnicity
                                            percentage={race.percentage}
                                            name={race.name}
                                            key={race.name}
                                        />
                                ))}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        )
    }
}

export default Tab6;