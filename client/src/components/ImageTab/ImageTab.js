import React, { Component } from "react";
import "./ImageTab.css";


class ImageTab extends Component {

    render(){
        return(
                <div className="cell medium-12 large-6">
                    <div className="card image">
                        <img src={this.props.image} alt={this.props.alt}/>
                    </div>
                </div>
        )
    }
}

export default ImageTab; 