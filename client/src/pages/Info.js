import React, { Component } from "react";
import Container from "../components/Container";
import TitleCard from "../components/TitleCard";
import GridContainer from "../components/GridContainer";
import GridX from "../components/GridX/GridX";
import Programs from "../components/Programs/Programs";
import Financial from "../components/Financial/Financial";
import ImageTab from "../components/ImageTab/ImageTab";
import GradInfo from "../components/GradInfo/GradInfo";
import TestScores from "../components/TestScores/TestScores";
import StudentBody from "../components/StudentBody/StudentBody";
import Rating from "../components/Rating";
import RankingTab from "../components/RankingTab/RankingTab";
import Map from "../components/Map";
import API from "../utils/API";
import AuthService from "../components/AuthService";
import QuestionAnswers from "../components/QuestionAnswers/QuestionAnswers";
//import Question from "../components/Question/Question.js";
//import Answer from "../components/Answer/Answer";

const auth = new AuthService();

class Info extends Component {

    state = {
        school: {},
        id: 0,
        majors: [],
        races: [],
        questions: [],
        ratings: [],
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
                                    this.setState({ questions: res3.data.college.Questions, ratings: res3.data.ratings, id: res3.data.college.id });
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

    componentWillReceiveProps(nextProps) {
        if (!auth.loggedIn()) this.props.history.replace("/");
        else {
            API.getCollege(nextProps.match.params.id)
                .then(res1 => {
                    this.setState({ school: res1.data, majors: res1.data.majors, races: res1.data.races })
                    API.saveCollege(res1.data)
                        .then(res2 => {
                            API.getSavedCollege(nextProps.match.params.id)
                                .then(res3 => {
                                    this.setState({ questions: res3.data.college.Questions, ratings: res3.data.ratings, id: res3.data.college.id });
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

    onRating = ratings => {
        this.setState({ ratings: ratings});
    }

    render() {

        const userType = new AuthService().getProfile().type;
        const isAlum = "alumn" === userType;

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
                            isAlum={isAlum}
                        />
                    </GridX>
                    <GridX>
                        <Programs
                            majors={this.state.majors}
                        />
                        <ImageTab
                            image="../assets/img/annie-spratt-608001-unsplash.jpg"
                            alt="academics" />
                    </GridX>
                    <GridX>
                        <TestScores
                            sat={this.state.school.sat}
                            act={this.state.school.act}
                        />
                        <Financial
                            loanrate={this.state.school.loanrate}
                            debt={this.state.school.debt}
                            monthly={this.state.school.monthly}
                        />
                        <GradInfo
                            gradrate={this.state.school.gradrate}
                            earnings={this.state.school.earnings}
                        />
                    </GridX>
                    <GridX>
                        <StudentBody
                            students={this.state.school.students}
                            fulltime={this.state.school.fulltime}
                            parttime={this.state.school.parttime}
                            races={this.state.races}
                        />
                    </GridX>
                    <GridX>
                        <Map 
                            name={this.state.school.name}
                        />
                    </GridX>
                    <GridX>
                        {(isAlum && auth.getProfile().school === this.state.school.id)  ? 
                        <div className="cell medium-12 large-8">
                            <Rating ratings={this.state.ratings} />
                        </div> :
                        <div className="cell medium-12 large-12">
                            <Rating ratings={this.state.ratings} />
                        </div>}

                        {(isAlum && auth.getProfile().school === this.state.school.id) ? <RankingTab onRating={this.onRating} school={this.state.id} /> : ""}
                    </GridX>
                    <GridX>
                        <QuestionAnswers questions={this.state.questions} userId={auth.getProfile().id} collegeId={this.state.id} />
                    </GridX>
                </GridContainer>
            </Container>
        );
    }
}

export default Info;
