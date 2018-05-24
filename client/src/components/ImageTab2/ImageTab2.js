import React, { Component } from "react";
import "./ImageTab2.css";


class ImageTab2 extends Component {

    render(){
        return(
                <div className="cell medium-12 large-4">
                    <div className="card image2">
                        <img src={this.props.image} alt={this.props.alt}/>
                    </div>
                </div>
        )
    }
}

export default ImageTab2; 