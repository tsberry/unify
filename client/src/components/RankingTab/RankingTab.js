import React from "react";
import "./RankingTab.css";
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';


class Tab extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 0,
            // rating_half_star: 3.5,
            rating_empty_initial: 0


        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }
    // onStarClickHalfStar(nextValue, prevValue, name, e) {
    //     const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

    //     if (xPos <= 0.5) {
    //         nextValue -= 0.5;
    //     }
    // }

    render() {
        const { rating } = this.state;

        return (<div className="card">

            <div className="content">

                <ul className="tabs" data-responsive-accordion-tabs="tabs medium-accordion large-tabs" id="example-tabs">
                    <li className="tabs-title is-active"><a href="#panel1" ariaSelected="true">Rank
        </a></li>
                    <li className="tabs-title"><a href="#panel2">Add Ranking</a></li>

                </ul>

                <div className="tabs-content" data-tabs-content="example-tabs">
                    <div className="tabs-panel is-active" id="panel1">
                        <p><h3>Rank this School</h3></p>
                        <p></p>
                    </div>
                    <div className="tabs-panel" id="panel2">
                        <p>two</p>

                    </div>
                    <div className="tabs-panel" id="panel3">
                        <p>three</p>
                        <p>Check me out! I'm a super cool Tab panel with text content!</p>
                    </div>
                    <div className="tabs-panel" id="panel4">
                        <p>four</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Rating from state: {rating}</h2>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                    onStarClickHalfStar={this.onStarClick.bind(this)}
                />
            </div>
        </div>

        )


    }
}

export default Tab;
