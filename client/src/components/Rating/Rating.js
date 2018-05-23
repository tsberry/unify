import React, { Component } from "react";
import "./Rating.css";



class Rating extends Component {

 


    render() {

        


 
    getAverage = () => this.props.ratings.reduce(((total, rating) => total + rating.transport + rating.food + rating.campuslife + rating.security + rating.faculty), 0) / (this.props.ratings.length * 5);

    getStarCount = star => {
        let count = 0;
        for (let i = 0; i < this.props.ratings.length; i++) {
            for (let rating in this.props.ratings[i]) {
                if(rating !== "id" && rating !== "UserId" && rating !== "CollegeId") {
                    if(this.props.ratings[i][rating] === star) count++;
                }
            }
        }
        return count;
    }

    starDisplay = () => {
        const stars = Math.round(this.getAverage());
        return (
            <span>
            <span className="fa fa-star checked"></span>
            <span className={stars >= 2 ? "fa fa-star checked" : "fa fa-star"}></span>
            <span className={stars >= 3 ? "fa fa-star checked" : "fa fa-star"}></span>
            <span className={stars >= 4 ? "fa fa-star checked" : "fa fa-star"}></span>
            <span className={stars === 5 ? "fa fa-star checked" : "fa fa-star"}></span>
            </span>
        );
    }
    render() {

 
        return (
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
 
                                <span className="heading">School Ranking</span>
                                {this.starDisplay()}
                                <p>{this.getAverage()} average based on {this.props.ratings.length} reviews.</p>
 
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
 
                                    <div style={{width: 100 * this.getStarCount(5)/(this.props.ratings.length*5) + "%"}}className="bar-5"></div>
                                </div>
                            </div>
                            <div className="side right">
                                <div>{this.getStarCount(5)}</div>
 
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
 
                                    <div style={{width: 100 * this.getStarCount(4)/(this.props.ratings.length*5) + "%"}}className="bar-4"></div>
                                </div>
                            </div>
                            <div className="side right">
                                <div>{this.getStarCount(4)}</div>
 
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
 
                                    <div style={{width: 100 * this.getStarCount(3)/(this.props.ratings.length*5) + "%"}} className="bar-3"></div>
                                </div>
                            </div>
                            <div className="side right">
                                <div>{this.getStarCount(3)}</div>
 
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
 
                                    <div style={{width: 100 * this.getStarCount(2)/(this.props.ratings.length*5) + "%"}} className="bar-2"></div>
                                </div>
                            </div>
                            <div className="side right">
                                <div>{this.getStarCount(2)}</div>
 
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
 
                                    <div style={{width: 100 * this.getStarCount(1)/(this.props.ratings.length*5) + "%"}} className="bar-1"></div>
                                </div>
                            </div>
                            <div className="side right">
                                <div>{this.getStarCount(1)}</div>
 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rating;