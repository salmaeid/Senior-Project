import React, { Component } from 'react'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import M  from 'materialize-css';
import '../css/pop-css.css'
import check from '../img/check.png'

export class CheckingsCard extends Component {
    
    render() {
        const {currentID, currentApps, currentName, currentAddress, currentCheckings} = this.props
        console.log('current checkings: ', currentCheckings);
        return (
            <li>
                    <div className="collapsible-header">
                    <img className="iconCards" align="left" src={check}></img>Checkings
                    </div>
                    <div className="collapsible-body popback">
                        <div>
                            <div className = "popwidth"><b>Account holder: </b> {currentName}</div>
                            <div className = "popwidth"><b>Account number: </b> {currentCheckings[0].accountNo}</div>
                            <div className = "popwidth"><b>Address: </b> {currentAddress}</div>
                            <div className = "popwidth"><b>Routing number: </b> {currentCheckings[0].routing}</div>
                            <div className = "popwidth"><b>Balance: </b> {currentCheckings[0].balance}</div>
                            <div className = "popwidth"><b>Interest rate: </b> {currentCheckings[0].intrate}</div>


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
        currentCheckings: state.currentCheckings,
    }

}
export default connect(mapStateToProps)(CheckingsCard)
