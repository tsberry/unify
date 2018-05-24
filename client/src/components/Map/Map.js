import React, { Component } from "react";
import "./Map.css";
import IconBar from "../IconBar/IconBar.js";
import bookImg from "./icons/book.png";
import coffee from "./icons/coffee.png"
import gym from "./icons/dumbbell-for-training.png";
import restaurant from "./icons/restaurant.png";
import transport from "./icons/transport.png";

class Map extends Component {

    render() {
        var query = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyACqntmAF2aHjkPK-1FFyUKw7q9F4vQ-Xw&q=' + this.props.schoolName;
        return (
            <div className="cell large-8">

                <div className="card map-frame">
                    <div id="map">
                        <iframe title="iFrame" src={query} allowFullScreen></iframe>
                    </div>
                    <div className="large-4 ">

                        <div id="#icons"><img src={bookImg} /></div>
                        <div id="#icons"><img src={coffee} /></div>
                        <div id="#icons"><img src={gym} /></div>
                        <div id="#icons"><img src={restaurant} /></div>
                        <div id="#icons"><img src={transport} /></div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Map;