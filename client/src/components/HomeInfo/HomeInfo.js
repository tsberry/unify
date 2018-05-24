import React from "react";
import "./HomeInfo.css";

const Textbox = props => (
    <div className="grid-container info-1">
        <div className="grid-x grid-padding-x">
            <div className="cell one large-12">
                <h5>You didn't spend the last 12 years of your life studying, to end up in a college that isn't right for you. </h5>
                <h3>Just what makes a college “right for you," anyway?</h3>
                <img id="school-icon" src="../assets/img/001-university.png" alt="school icon" />
                <img id="rating-icon" src="../assets/img/009-review.png" alt="rating icon" />
            </div>
        </div>

        <div className="grid-x grid-padding-x center-info">
            <div className="cell two large-6">
                <h5><b>Uni.fy offers prospective students an in-depth view of universities, colleges, and trade schools, providing insight into the things students find most important.</b></h5>
                <br />
                <ul>
                    <li>Academics and majors</li>
                    <li>Cost, financial aid, and affordability</li>
                    <li>Location and distance from home</li>
                    <li>Campus community and social life</li>
                    <li>Size and student body demographics</li>
                    <li>Selectivity and admission</li>
                </ul>
                <br />
                <h5>We strive to make your college hunt as painless as possible.</h5>
            </div>
            <div className="cell img-one large-6">
                <img src="../assets/img/jason-wong-352463-unsplash.jpg" alt="college hallway" />
            </div>
        </div>
        <div className="grid-x grid-padding-x">
            <div className="cell one large-12">
                <h5 className="color-text">Even if you've dreamed of going to a certain college your whole life, not checking out your other options is a mistake.</h5>
                <p>Finding your perfect school takes time and effort, and many former students can attest to this.</p>
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
                <h5>Verified alumni can share their knowledge and experience with new students by contributing reviews of their alma mater and answering questions on the school message boards.</h5>
                
            </div>
        </div>
    </div>
);

export default Textbox;

