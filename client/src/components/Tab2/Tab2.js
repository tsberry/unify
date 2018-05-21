import React, { Component } from "react";
import "./Tab2.css";


class Tab2 extends Component {

    render(){
        return(
            <div className="cell medium-12 large-4">
            <div className="card finance">
                <div className="card-divider">
                    <p>Financial Aid & Debt</p>
                </div>
                <div className="card-section content">
                    <p>Students Receiving Federal Loans</p>
                    <h4>{this.props.loanrate}%</h4>
                    <hr />
                    <p>Typical Total Debt After Graduation</p>
                    <h4>{this.props.debt}</h4>
                    <p>*For undergraduate borrowers who complete college.</p>
                    <hr />
                    <p>Typical Loan Payment:   <b>${this.props.monthly} / mon</b></p>
                </div>
            </div>
        </div>
        )
    }
}

export default Tab2;


