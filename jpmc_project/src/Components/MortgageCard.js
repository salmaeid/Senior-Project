import React, { Component } from 'react'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import M  from 'materialize-css';

export class MortgageCard extends Component {
    
    render() {
        const {currentID, currentApps, currentName, currentChechings, currentSavings, currentMortgage} = this.props
        return (

            <li>
            <div className="collapsible-header"><i className="material-icons">M</i>Mortgages</div>
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
export default connect(mapStateToProps)(MortgageCard)
