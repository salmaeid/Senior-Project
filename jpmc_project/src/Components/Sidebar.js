import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import M  from 'materialize-css';
import '../css/img-css.css'
import logo from '../img/chase-logo1.png'
export class Sidebar extends Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var options;
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, options);
          });
    }

    render() {
        return (

            <ul id="slide-out" className="sidenav sidenav-fixed sideWidth blue darken-4  z-depth-4">

                    <li><img className="imgStyle" align="middle" src={logo}></img></li>
        
                    <li><div className="section center"><p className="countStyle">{100}  </p><i className="material-icons tiny iconStyle1" >done_all</i></div></li>

                    <li><div className="section no padding center"><i className="material-icons small iconStyle2" >help_outline</i></div></li>
                </ul>
        )
    }
}

export default Sidebar
