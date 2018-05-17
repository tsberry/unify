import React from "react";
import Hero from "../components/Hero";


const Home = () => (
  <div>
    <Hero backgroundImage="./assets/img/fabian-mardi-119790-unsplash.jpg">
        <div className="textbox">
            <div class="text-content">
              <h3>The School of Your Dreams is Just a Click Away</h3>
            </div>
        </div>
    </Hero>
    <div className="grid-container info-1">
        <div className="grid-x grid-padding-x title">
            <div className="cell"><h3>How it Works</h3></div>
        </div>
        <br/>
        <div className="grid-x grid-padding-x">
            <div className="cell medium-12 large-4">
                <h5>
                    Something
                </h5>
                <p>
                    Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.
                </p>
            </div>
            <div className="cell medium-12 large-4">
                <h5>
                    Something Else
                </h5>
                <p>
                    Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.
                </p>
            </div>
            <div className="cell medium-12 large-4">
                <h5>
                    Another Thing
                </h5>
                <p>
                    Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.
                </p>
            </div>
        </div>
    </div>
  </div>
);

export default Home;
