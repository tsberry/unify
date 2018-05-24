import React, { Component } from "react";
import "./StudentBody.css";
import Ethnicity from "../Ethnicity/Ethnicity";


class StudentBody extends Component {

    render(){
        return(
        <div className="cell large-12">
            <div className="card">
                <div className="card-divider">
                    <p>Student Body</p>
                </div>
                    <div className="card-section student-body">
                        <div className="grid-x grid-padding-x">
                            <div className="cell large-5">
                                <h4>{this.props.students} Undergraduate Students</h4>
                                <ul>
                                    <h4><li>{this.props.fulltime}% Full-time</li></h4>
                                    <h4><li>{this.props.parttime}% Part-time</li></h4>
                                </ul>
                            </div>
                            <div className="cell large-7 scales">
                                <h4>Race/Ethnicity</h4>
                                <br/>
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

export default StudentBody;