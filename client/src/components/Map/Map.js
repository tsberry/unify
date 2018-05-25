import React, { Component } from "react";
import "./Map.css";
//hi
class Map extends Component {
    state = {
        category: ""
    }

    clickHandle = category => this.setState({ category: category });

    render() {
        return (
            <div className="cell large-12">
                <div className="grid-x grid-margin-x">
                    <div className="cell medium-10 large-11">
                        <div className="card map-frame">
                            <div id="map">
                                <iframe title="iFrame" src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyACqntmAF2aHjkPK-1FFyUKw7q9F4vQ-Xw&q=${this.props.name}+${this.state.category}`} allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="icons cell medium-2 large-1">
                        <div className="icon" onClick={() => this.clickHandle("")}><img src="../assets/img/icons/book.png" alt="Book"/></div>
                        <div className="icon" onClick={() => this.clickHandle("nearby coffee shops")}><img src="../assets/img/icons/coffee.png" alt="Coffee"/></div>
                        <div className="icon" onClick={() => this.clickHandle("nearby gyms")}><img src="../assets/img/icons/dumbbell-for-training.png" alt="Dumbbell" /></div>
                        <div className="icon" onClick={() => this.clickHandle("nearby food")}><img src="../assets/img/icons/restaurant.png" alt="Restaurant" /></div>
                        <div className="icon" onClick={() => this.clickHandle("nearby transit")}><img src="../assets/img/icons/transport.png" alt="Transport" /></div>
                    </div>

                </div>



            </div>

        )
    }
}

export default Map;