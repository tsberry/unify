import React, { Component } from "react";
import "./Rating.css";


class Rating extends Component {

    render(){
        return(
            <div className="cell medium-12 large-6">
                <div className="card">
                <div className="card-section rating-body">
                    <div className="grid-x grid-margin-x">
                        <div className="cell large-12">
                            <span className="heading">School Rating</span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <p>4.1 average based on 254 reviews.</p>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div className="side">
                            <div>5 star</div>
                        </div>
                        <div className="middle">
                            <div className="bar-container">
                                <div className="bar-5"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>150</div>
                        </div>
                        <div className="side">
                            <div>4 star</div>
                        </div>
                        <div className="middle">
                            <div className="bar-container">
                                <div className="bar-4"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>63</div>
                        </div>
                        <div className="side">
                            <div>3 star</div>
                        </div>
                        <div className="middle">
                            <div className="bar-container">
                                <div className="bar-3"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>15</div>
                        </div>
                        <div className="side">
                            <div>2 star</div>
                        </div>
                        <div className="middle">
                            <div className="bar-container">
                                <div className="bar-2"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>6</div>
                        </div>
                        <div className="side">
                            <div>1 star</div>
                        </div>
                        <div className="middle">
                            <div className="bar-container">
                                <div className="bar-1"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>20</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Rating;