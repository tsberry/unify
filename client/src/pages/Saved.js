import React, { Component } from "react";
import Container from "../components/Container"
import ResultCard from "../components/ResultCard";
//import GridContainer from "../components/GridContainer"
//import GridX from "../components/GridX/GridX";


class Saved extends Component {

    state = {
        schools: []
    }

    componentDidMount() {
        
    } 


    render() {
        return (
            <Container>
                <ResultCard
                  getInfo={this.getInfo}
                  id={school.id}
                  name = {school.name}
                  city = {school.city}
                  state = {school.state}
                  students = {school.students}
                  years = {school.type}
                  ownership = {school.ownership}
                  location = {school.location}
                  size = {school.size}
                />
            </Container>
        )
    }
}

export default Saved;