import React, { Component } from "react";
import "./Tab3.css";


class Tab3 extends Component {

    render(){
        return(
                <div className="cell medium-12 large-6">
                    <div className="card">
                        <img src={this.props.image} alt={this.props.alt}/>
                    </div>
                </div>
        )
    }
}

export default Tab3; 