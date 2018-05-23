import React, { Component } from "react";
import Container from "../components/Container"
import ResultCard from "../components/ResultCard";
//import GridContainer from "../components/GridContainer"
//import GridX from "../components/GridX/GridX";
import API from "../utils/API";
import AuthService from "../components/AuthService";
const auth = new AuthService();

class Saved extends Component {

    state = {
        schools: []
    }

    componentWillMount() {
        if (!auth.loggedIn() || auth.getProfile().type === "alumn") {
            this.props.history.replace('/');
        }
        else {
            API.getColleges(auth.getProfile().id)
                .then(res => {
                    this.setState({ schools: res.data.colleges });
                });
        }
    }

    getInfo = id => {
        this.props.history.push(`/info/${id}`)
    }

    starAction = id => {
        API.deleteUser(auth.getProfile().id, id)
            .then(res => {
                API.getColleges(auth.getProfile().id)
                    .then(res => {
                        this.setState({ schools: res.data.colleges });
                    });
            });
    }

    render() {
        return (
            <Container>
                <ul>
                    {this.state.schools.map(school => (
                        <ResultCard
                            getInfo={this.getInfo}
                            id={school.queryId}
                            name={school.name}
                            city={school.city}
                            state={school.state}
                            students={school.students}
                            years={school.type}
                            ownership={school.ownership}
                            location={school.location}
                            size={school.size}
                            page="saved"
                            starAction={this.starAction}
                            key={school.queryId}
                        />
                    ))}
                </ul>
            </Container>
        )
    }
}

export default Saved;