import React, { Component } from "react";
import "./Map.css";

class Map extends Component {

    render(){
        return(
            <div className="cell large-8">
          
                <div className="card map-frame">
                    <div id="map">
                        <iframe title="iFrame" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyACqntmAF2aHjkPK-1FFyUKw7q9F4vQ-Xw&q=ucsd+food" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Map;