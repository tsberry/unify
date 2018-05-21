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

    componentDidMount() {
        API.getColleges(auth.getProfile().id)
            .then(res => {
                this.setState({ schools: res.data.colleges });
            })
    }

    getInfo = id => {
        this.props.history.push(`/info/${id}`)
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
                        />
                    ))}
                </ul>
            </Container>
        )
    }
}

export default Saved;