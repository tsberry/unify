import React, { Component } from "react";
import "./Tab2.css";


class Tab2 extends Component {

    render(){
        return(
            <div className="cell medium-12 large-4">
            <div className="card">
                <div className="card-divider">
                    <h4>Financial Aid & Debt</h4>
                </div>
                <div className="card-section">
                    <h4>Students Receiving Federal Loans</h4>
                    <h1>{this.props.loanrate}%</h1>
                    <p>At some schools where few students borrow federal loans, the typical undergraduate may leave school with $0 in debt.</p>
                    <hr />
                    <h4>Typical Total Debt After Graduation</h4>
                    <h1>{this.props.debt}</h1>
                    <p>For undergraduate borrowers who complete college.</p>
                    <hr />
                    <h4>Typical Monthly Loan Payment</h4>
                    <h1>${this.props.monthly}</h1>
                </div>
            </div>
        </div>
        )
    }
}

export default Tab2;


