import React, { Component } from "react";
import "./Tab1.css";
import MajorItem from "../MajorItem/MajorItem";


class Tab1 extends Component {

    //TODO : make an on click method to toggle the 
    // accordion content
    state = {
        showAccordionContent : true
    }

    toggleAccordionContent = (e) => {
        e.preventDefault();
        if(this.state.showAccordionContent) {
            this.setState({
                showAccordionContent: false
            });
        } else {
            this.setState({
                showAccordionContent: true
            });
        }
       
    }

    render(){
        console.log(this.props);
        return(
            <li className="accordion-item is-active" data-accordion-item>
                <div className="accordion-title" onClick={this.toggleAccordionContent}>Academic Programs</div>
                {(this.state.showAccordionContent)?<div className="accordion-content" data-tab-content >
                    <h4>Fields of Study</h4>
                    <hr />
                    <table>
                        <tbody>
                            {this.props.majors.map(major => (
                                <MajorItem
                                    name = {major.name}
                                    key = {major.name}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>:""}
            </li>
        )
    }
}

export default Tab1;