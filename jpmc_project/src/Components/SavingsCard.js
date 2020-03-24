import React, { Component } from 'react'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import M  from 'materialize-css';

export class SavingsCard extends Component {
    render() {
        const {currentID, currentApps, currentName, currentChechings, currentSavings, currentMortgage} = this.props
        return (
            
                <li>
                    <div className="collapsible-header"><i className="material-icons">S</i>Savings</div>
                    <div className="collapsible-body"><span>Hello</span></div>
                
                
                </li>
        
        )
    }
}
const mapStateToProps = (state) => {
    return{
        currentID: state.currentID,
        currentApps: state.currentApps,
        currentName: state.currentName,
        currentChechings: state.currentChechings,
        currentSavings: state.currentSavings,
        currentMortgage: state.currentMortgage
    }

}
export default connect(mapStateToProps)(SavingsCard)
