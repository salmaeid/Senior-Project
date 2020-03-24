import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import ClientTabs from './ClientTabs'
import AppsView from './AppsView'
import '../css/dashboardcss.css'
import Nav from './Nav'
export class Dashborad extends Component {
    handleClick = (e) => {
        console.log('hello');
    }
    render() {
        return (
            <div className="row">
                <div className= "col s1 m1 l1 blue darken-4 z-depth-5 full-width">
                    <Nav/>
                </div>

                <div className= "col s3 grey lighten-1 z-depth-5 full-width no-padding">
                    <ClientTabs/>
                </div>
                

                <div className= "col s4 grey lighten-1 z-depth-1 full-width">
                </div>

                <div className= "col s4 grey lighten-1 z-depth-1 full-width">
                  <AppsView/>
                    
                </div>
    
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        count: state.count
    }

}
export default connect(mapStateToProps) (Dashborad)
