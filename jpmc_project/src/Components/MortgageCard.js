import React, { Component } from 'react'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import M  from 'materialize-css';
import '../css/pop-css.css'

export class MortgageCard extends Component {
    
    
    render() {
        const {currentID, currentApps, currentName, currentAddress, currentMortgage} = this.props
        return (

            <li>
            <div className="collapsible-header"><i className="material-icons">M</i>Mortgages</div>
            <div className="collapsible-body popback">
                <div>
                    <div className = "popwidth"><b>Account holder: </b> {currentName}</div>
                    <div className = "popwidth"><b>Account number: </b> {currentMortgage[0].accountNo}</div>
                    <div className = "popwidth"><b>Address: </b> {currentAddress}</div>
                    <div className = "popwidth"><b>Remaining balance: </b> {currentMortgage[0].rembalance}</div>
                    <div className = "popwidth"><b>Payment fee: </b> {currentMortgage[0].payfee}</div>
                    <div className = "popwidth"><b>Next payment date: </b> {currentMortgage[0].nextpaydate}</div>
                    <div className = "popwidth"><b>Interest rate: </b> {currentMortgage[0].intrate}</div>


                 </div>
            </div>
        
        
        </li>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentID: state.currentID,
        currentApps: state.currentApps,
        currentName: state.currentName,
        currentAddress: state.currentAddress,
        currentMortgage: state.currentMortgage,
    }

}
export default connect(mapStateToProps)(MortgageCard)
