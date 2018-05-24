import React, { Component } from "react";
import Hero from "../components/Hero"
import Textbox from "../components/Textbox";
import HomeInfo from "../components/HomeInfo";
//import Container from "../components/Container";


class Home extends Component {
    render() {
        return ( 
            <div className="home-main">
                <Hero>
                    <Textbox />
                </Hero>
                <HomeInfo />
            </div>
        )
    }
}

export default Home;
