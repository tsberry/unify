import React from "react";
import Hero from "../components/Hero"


const Home = () => (
  <div>
    <Hero backgroundImage="./assets/img/fabian-mardi-119790-unsplash.jpg">
        <div className="textbox">
            <div className="text-content">
              <h3>The school of your dreams is just a click away...</h3>
            </div>
        </div>
    </Hero>
    <div className="grid-container info-1">
        <div className="grid-x grid-padding-x title">
            <div className="cell"><h3>How it works:</h3></div>
        </div>
        <br/>
        <div className="grid-x grid-padding-x">
            <div className="cell medium-12 large-4">
                <h5>
                    Step 1
                </h5>
                <p>
                    Create your user login.
                </p>
            </div>
            <div className="cell medium-12 large-4">
                <h5>
                    Step 2
                </h5>
                <p>
                    Verify if you're a student, alumni or a prospective college student.
                </p>
            </div>
            <div className="cell medium-12 large-4">
                <h5>
                    Step 3
                </h5>
                <p>
                    Share your college experience and add in-depth review. You can also utilize our unique search feature to get an inside look at universities across the country.
                </p>
            </div>
        </div>
    </div>
  </div>
);

export default Home;
