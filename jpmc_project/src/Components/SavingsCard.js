import React, { Component } from 'react'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import M  from 'materialize-css';
import '../css/pop-css.css'
import save from '../img/save.png'


export class SavingsCard extends Component {

    render() {
        const {currentID, currentApps, currentName, currentAddress, currentSavings} = this.props
        return (
            
                <li>
                    <div className="collapsible-header">
                        <img className="iconCards" align="left" src={save}></img> Savings
                    </div>
                    <div className="collapsible-body popback">

                        <div>
                        <div className = "popwidth"><b>Account holder: </b> {currentName}</div>
                        <div className = "popwidth"><b>Account number: </b> {currentSavings[0].accountNo}</div>
                        <div className = "popwidth"><b>Address: </b> {currentAddress}</div>
                        <div className = "popwidth"><b>Routing number: </b> {currentSavings[0].routing}</div>
                        <div className = "popwidth"><b>Balance: </b> {currentSavings[0].balance}</div>
                        <div className = "popwidth"><b>Interest rate: </b> {currentSavings[0].intrate}</div>
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
        currentSavings: state.currentSavings,
    }

}
export default connect(mapStateToProps)(SavingsCard)
