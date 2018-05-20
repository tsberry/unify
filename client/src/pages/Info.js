import React, { Component } from "react";
import Container from "../components/Container"
import TitleCard from "../components/TitleCard";
import TabsWrapper from "../components/TabsWrapper"
import Tab1 from "../components/Tab1/Tab1";
import API from "../utils/API";

class Info extends Component {

    state = {
        school: {},
        majors: []
    }

    componentDidMount() {
        API.getCollege(this.props.match.params.id)
            .then(res => {
                console.log(res.data);
                this.setState({ school: res.data, majors: res.data.majors })
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <TitleCard
                    name={this.state.school.name}
                    city={this.state.school.city}
                    state={this.state.school.state}
                    url={this.state.school.url}
                />
                <TabsWrapper>
                    <Tab1
                        majors={this.state.majors}
                    />
                    {/* <Tab2/>
                <Tab3/>
                <Tab4/>
                <Tab5/> */}
                </TabsWrapper>
            </Container>
        );
    }
}

export default Info;