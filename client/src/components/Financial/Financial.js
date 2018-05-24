import React, { Component } from "react";
import "./Financial.css";


class Financial extends Component {

    render(){
        return(
            <div className="cell medium-12 large-4">
            <div className="card finance">
                <div className="card-divider">
                    <p>Financial Aid & Debt</p>
                </div>
                <div className="card-section content">
                    <h5>{this.props.loanrate}% Students Receive Federal Loans</h5>
                    <hr />
                    <p>Typical Total Debt After Graduation</p>
                    <h4>${this.props.debt}</h4>
                    <p>*For undergraduate borrowers who complete college.</p>
                    <hr />
                    <h5>Typical Loan Payment:   ${this.props.monthly} / mon</h5>
                </div>
            </div>
        </div>
        )
    }
}

export default Financial;


