import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import M  from 'materialize-css';
import ClientTabs from './ClientTabs'
import AppsView from './AppsView'
import '../css/dashboardcss.css'
import Sidebar from './Sidebar'
import clientIcon from '../img/client.png'
import chatIcon from '../img/chat.png'
import appsIcon from '../img/apps.png'
import Chat from './Chat'




export class Dashborad extends Component {

    
    handleClick = (e) => {
        console.log('hello');
    }
    render() {
        return (

            <div className="row">

                <Sidebar/>

                <div className= "col s3 offset-s1 grey lighten-1 z-depth-4 full-width no-padding">

                    <div className="section grey darken-1 no-padding headerHeight">
                        <img className="headerIcon" align="left" src={clientIcon}></img>
                        <p className="headerText">Clients</p>
                    </div>
                    <ClientTabs/>
                </div>
                

                <div className= "col s3 grey lighten-1 z-depth-4 full-width no-padding chatPosition">

                    <div className="section grey darken-1 no-padding headerHeight">
                        <img className="headerIcon" align="left" src={chatIcon}></img>
                        <p className="headerText">Chat</p>
                    </div>
                    <Chat/>
                </div>

                <div className= "col s4 grey lighten-1 z-depth-4 full-width no-padding">
                    <div className="section grey darken-1  no-padding headerHeight">
                        <img className="headerIcon" align="left" src={appsIcon}></img>
                        <p className="headerText"> Apps</p>
                    </div>
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
