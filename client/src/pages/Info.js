import React, { Component } from "react";
import Container from "../components/Container"
import TitleCard from "../components/TitleCard";
import GridContainer from "../components/GridContainer"
import Tab1 from "../components/Tab1/Tab1";
import Tab2 from "../components/Tab2/Tab2";
import Tab3 from "../components/Tab3/Tab3";
import Tab4 from "../components/Tab4/Tab4";
import Tab5 from "../components/Tab5/Tab5";
import Tab6 from "../components/Tab6/Tab6";
import Rating from "../components/Rating";
import API from "../utils/API";
import GridX from "../components/GridX/GridX";
import RankingTab from "../components/RankingTab/RankingTab";

class Info extends Component {

    state = {
        school: {},
        majors: [],
        races: []
    }

    componentDidMount() {
        API.getCollege(this.props.match.params.id)
            .then(res => {
                console.log(res.data);
                this.setState({ school: res.data, majors: res.data.majors, races: res.data.races })
                API.saveCollege(res.data)
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <GridContainer>
                    <GridX>
                        <TitleCard
                            name={this.state.school.name}
                            city={this.state.school.city}
                            state={this.state.school.state}
                            url={this.state.school.url}
                        />
                    </GridX>
                    <GridX>
                        <Tab1
                            majors={this.state.majors}
                        />
                        <Tab3
                            image="../assets/img/annie-spratt-608001-unsplash.jpg"
                            alt="academics" />
                    </GridX>
                    <GridX>
                        <Tab5
                            sat={this.state.school.sat}
                            act={this.state.school.act}
                        />
                        <Tab2
                            loanrate={this.state.school.loanrate}
                            debt={this.state.school.debt}
                            monthly={this.state.school.monthly}
                        />
                        <Tab4
                            gradrate={this.state.school.gradrate}
                            earnings={this.state.school.earnings}
                        />
                    </GridX>
                    <GridX>
                        <Tab6
                            students={this.state.school.students}
                            fulltime={this.state.school.fulltime}
                            parttime={this.state.school.parttime}
                            races={this.state.races}
                        />
                    </GridX>
                    <GridX>
                        <Rating/>
                        <RankingTab />
                    </GridX>
                </GridContainer>
            </Container>
        );
    }
}

export default Info;