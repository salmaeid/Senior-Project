import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import M  from 'materialize-css';
import '../css/img-css.css'
import logo from '../img/chase-logo1.png'
import {logOut} from '../Actions/ClientActions'


export class Sidebar extends Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var options;
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, options);
          });
    }

    handleLog = (e) => {
        this.props.logOut()
    }

    render() {

        const {count, path} = this.props;
        if (path === '/'){
            return (
                <Redirect to= '/'/>
            )
        }
        return (

            <ul id="slide-out" className="sidenav sidenav-fixed sideWidth blue darken-4  z-depth-4">

                    <li><img className="imgStyle" align="middle" src={logo}></img></li>
        
                    <li><div className="section center"><p className="countStyle">{count}</p><i className="material-icons tiny iconStyle1" >done_all</i></div></li>

                    <li><div className="section no padding center"><i className="material-icons small iconStyle2" >help_outline</i></div></li>

                    <li><div className="section center"><i className="material-icons small iconStyle2" onClick={this.handleLog}>power_settings_new</i></div></li>

                </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        count: state.count,
        path: state.path
    }

}

const mapDispatchToProps = (dispatch) =>{
    return{
        logOut: () => {dispatch(logOut())}
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
