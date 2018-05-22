import React from "react";
import "./HomeInfo.css";

const Textbox = props => (

    <div className="grid-container info-1">
        <div className="grid-x grid-padding-x">
            <div className="cell one large-12">
                <p>You didn't spend the last 12 years of your life studying, just to end up in a college that isn't right for you. </p>
                <h3>Just what makes a college “right for you," anyway?</h3>
            </div>
        </div>

        <div className="grid-x grid-padding-x center-info">
            <div className="cell two large-6">
                <p><b>
                    When you’re searching for colleges, try to remember what college should be. It's a place where:
                            </b></p>
                <br />
                <ul>
                    <li>You're comfortable being yourself—but also challenged to be better.</li>
                    <br />
                    <li>You have opportunities to study things that fascinate you, play the sports you want to play, work at internships that help clarify your career plans.</li>
                    <br />
                    <li>You learn how to learn, communicate well, and solve problems — skills all employers want to see, no matter what industry.</li>
                    <br />
                    <li>And you can get this kind of education without breaking the bank and taking on crazy amounts of student debt.</li>
                </ul>
            </div>
            <div className="cell img-one large-6">
                <img src="../assets/img/jason-wong-352463-unsplash.jpg" alt="college hallway" />
            </div>
        </div>
        <div className="grid-x grid-padding-x">
            <div className="cell img-two large-3">
                <img src="../assets/img/andres-gerlotti-560552-unsplash.jpg" alt="classroom" />
            </div>
            <div className="cell img-three large-3">
                <img src="../assets/img/nathan-dumlao-572049-unsplash.jpg" alt="college arial view" />
            </div>
            <div className="cell three large-6">
                <p>Even if you've dreamed of going to a certain college your whole life, not checking out your other options is a mistake.</p>
                <p>Finding your perfect school takes time and effort, but it's worth it in the end.</p>
            </div>
        </div>
    </div>
);

export default Textbox;