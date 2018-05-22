import React, { Component } from "react";
import Hero from "../components/Hero"
import Textbox from "../components/Textbox";
import HomeInfo from "../components/HomeInfo";


class Home extends Component {
    render() {
        return (
            <div>
                <Hero backgroundImage="./assets/img/fabian-mardi-119790-unsplash.jpg">
                    <Textbox/>
                </Hero>
                <HomeInfo/>
            </div>
        )
    }
}

export default Home;
