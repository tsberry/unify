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
import Map from "../components/Map";
import API from "../utils/API";
import AuthService from "../components/AuthService";
import GridX from "../components/GridX/GridX";
import RankingTab from "../components/RankingTab/RankingTab";

const auth = new AuthService();

class Info extends Component {

    state = {
        school: {},
        majors: [],
        races: [],
        questions: [],
        saved: false
    }

    componentWillMount() {
        if (!auth.loggedIn()) this.props.history.replace("/");
        else {
            API.getCollege(this.props.match.params.id)
                .then(res1 => {
                    this.setState({ school: res1.data, majors: res1.data.majors, races: res1.data.races })
                    API.saveCollege(res1.data)
                        .then(res2 => {
                            API.getSavedCollege(this.props.match.params.id)
                                .then(res3 => {
                                    this.setState({ questions: res3.data.college.Questions });
                                    console.log(res3.data.college.Questions);
                                    if (auth.loggedIn()) {
                                        API.getColleges(auth.getProfile().id)
                                            .then(res4 => {
                                                for (let i = 0; i < res4.data.colleges.length; i++) {
                                                    if (this.state.school.id === res4.data.colleges[i].queryId) {
                                                        this.setState({ saved: true });
                                                        return;
                                                    }
                                                }
                                            });
                                    }
                                })
                        });
                }).catch(err => console.log(err));
        }
    }

    starAction = () => {
        if (this.state.saved) {
            API.deleteUser(auth.getProfile().id, this.state.school.id)
                .then(res => {
                    this.setState({ saved: false });
                });
        }
        else {
            API.saveUser(auth.getProfile().id, this.state.school.id)
                .then(res => {
                    this.setState({ saved: true });
                });
        }
    }

    render() {
        return (
            <Container>
                <GridContainer>
                    <GridX>
                        <TitleCard
                            id={this.state.school.id}
                            name={this.state.school.name}
                            city={this.state.school.city}
                            state={this.state.school.state}
                            url={this.state.school.url}
                            starAction={this.starAction}
                            saved={this.state.saved}
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
                        <Map />
                    </GridX>
                    <GridX>
                        <Rating />
                        <RankingTab school={this.state.school.id} />
                    </GridX>
                </GridContainer>
            </Container>
        );
    }
}

export default Info;