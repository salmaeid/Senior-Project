import React, { Component } from 'react'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import M  from 'materialize-css';
import SavingsCard from './SavingsCard'
import CheckingsCard from './CheckingsCard'
import MortgageCard from './MortgageCard'






export class AppsView extends Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var options;
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems, options);
          });
    }
    render() {

        
        const {currentID, currentApps, currentName, currentChechings, currentSavings, currentMortgage} = this.props
        console.log('ID: ', currentID);
        console.log('Apps: ', currentApps);
        console.log('Name: ', currentName);
        console.log('Chekings: ' , currentChechings);
        console.log('Savings: ' , currentSavings);
        console.log('Mortgage: ' , currentMortgage);

        let appList = [];
        if (currentApps[0]){
            
            appList.push(
                <CheckingsCard  key={(currentID*6)-5}/>, 
                <br key={(currentID*6)-4}></br>
                )

        }
        if (currentApps[1]){
            
            appList.push(
                <SavingsCard key={(currentID*6)-3}/>, 
                <br key={(currentID*6)-2}></br>
                )

        }
        if (currentApps[2]){
            
            appList.push(
                <MortgageCard key={(currentID*6)-1}/>, <br key={(currentID*6)-0}></br>
                )

        }

        return(

            <ul className="collapsible popout">
                {appList}
                
            </ul>
        );
              
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

export default connect(mapStateToProps)(AppsView)
