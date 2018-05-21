import React, { Component } from "react";
import "./Tab1.css";
import MajorItem from "../MajorItem/MajorItem";


class Tab1 extends Component {

    render(){
        return(
                <div className="cell medium-12 large-6">
                    <div className="card">
                        <div className="card-divider">
                            <p>Academic Programs</p>
                        </div>
                        <div className="card-section majors">
                            <table>
                                <tbody>
                                    {this.props.majors.map(major => (
                                        <MajorItem
                                            name={major.name}
                                            key={major.name}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Tab1;

