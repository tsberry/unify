import React from "react";
// import "./RankingTab.css";
import StarRatingComponent from 'react-star-rating-component';


class RankingTab extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 0,
            // rating_half_star: .5,
            rating_empty_initial: 0,
            faculty: 0,
            campusLife: 0,
            security: 0,
            transportation: 0,
            localFood: 0
};

}

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });

        if (name === "faculty") {
            this.setState({ faculty: nextValue });
        }
        else if (name === "campusLife") {
            this.setState({ campusLife: nextValue })
        }

        else if (name === "localFood") {
            this.setState({ localFood: nextValue })
        }

        else if (name === "transportation") {
            this.setState({ transportation: nextValue })
        }

        else if (name === "security") {
            this.setState({ security: nextValue })


        } else { }

    }
    onSubmit(event) {
        event.preventDefault();
        fetch('api/learning', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                rating: this.state.rating,
                faculty: this.state.faculty,
                campusLife: this.state.campusLife,
                transportation: this.state.transportation,
                localFood: this.state.localFood
            })
        })
    }

 // onStarClickHalfStar(nextValue, prevValue, name, e) {
    //     const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

    //     if (xPos <= 0.5) {
    //         nextValue -= 0.5;
    //     }
    // }

    render() {
        // const { rating } = this.state;

        return (<div className="card">

            <div className="content">

                <div className="tabs-content" data-tabs-content="example-tabs">
                    <div className="tabs-panel is-active" id="panel1">
                        <form>
                            <label htmlFor="ranking"><h3>Rank this School</h3></label>
                            <label htmlFor="faculty">Faculty:
                                <StarRatingComponent
                                    name="faculty"
                                    starCount={5}
                                    value={this.state.faculty}
                                    onStarClick={this.onStarClick.bind(this)}
                                    onStarClickHalfStar={this.onStarClick.bind(this)}
                                    starColor="#1565c0"
                                    renderStarIcon={(index, value) => <span className={(index > value) ? "fa fa-star" : "fa fa-star checked"}></span>}
                                    emptyStarColor="#868889"
                                /></label>
                            <label htmlFor="campusLife">Campus Life:
                                <StarRatingComponent
                                    name="campusLife"
                                    starCount={5}
                                    value={this.state.campusLife}
                                    onStarClick={this.onStarClick.bind(this)}
                                    onStarClickHalfStar={this.onStarClick.bind(this)}
                                    starColor="#1565c0"
                                    renderStarIcon={(index, value) => <span className={(index > value) ? "fa fa-star" : "fa fa-star checked"}></span>}
                                    emptyStarColor="#868889"
                                /></label>
                            <label htmlFor="localFood">Local Food:
                                <StarRatingComponent
                                    name="localFood"
                                    starCount={5}
                                    value={this.state.localFood}
                                    onStarClick={this.onStarClick.bind(this)}
                                    onStarClickHalfStar={this.onStarClick.bind(this)}
                                    starColor="#1565c0"
                                    renderStarIcon={(index, value) => <span className={(index > value) ? "fa fa-star" : "fa fa-star checked"}></span>}
                                    emptyStarColor="#868889"
                                /></label>
                            <label htmlFor="transportation">Transportation:
                                <StarRatingComponent
                                    name="transportation"
                                    starCount={5}
                                    value={this.state.transportation}
                                    onStarClick={this.onStarClick.bind(this)}
                                    onStarClickHalfStar={this.onStarClick.bind(this)}
                                    starColor="#1565c0"
                                    renderStarIcon={(index, value) => <span className={(index > value) ? "fa fa-star" : "fa fa-star checked"}></span>}
                                    emptyStarColor="#868889"
                                />
                            </label>
                            <label htmlFor="security">Security:
                                <StarRatingComponent
                                    name="security"
                                    starCount={5}
                                    value={this.state.security}
                                    onStarClick={this.onStarClick.bind(this)}
                                    onStarClickHalfStar={this.onStarClick.bind(this)}
                                    starColor="#1565c0"
                                    renderStarIcon={(index, value) => <span className={(index > value) ? "fa fa-star" : "fa fa-star checked"}></span>}
                                    emptyStarColor="#868889"
                                />
                            </label>
                            <input type="submit" id="submit" value="submit" onClick = {this.onSubmit.bind(this)} />
                        </form>
                    </div>
                </div>
            </div>
        </div>

        )


    }
}

export default RankingTab;
