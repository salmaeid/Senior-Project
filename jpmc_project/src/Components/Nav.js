import React, { Component } from 'react'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import M  from 'materialize-css';
import '../css/img-css.css'
import logo from '../img/chase-logo1.png'
import logoText from '../img/chase-logo4.png'



export class Nav extends Component {
    render() {
        return (
            <div>
                
                <div className="section no-padding center">

                    <img className="imgStyle2" align="middle" src={logoText}></img>
                    <img className="imgStyle1" align="middle" src={logo}></img>
                    
                </div>

                <br></br>

                <div className="section no padding center"><span><i className="material-icons small iconStyle1" >done_all</i><p className="countStyle">{100}</p></span></div>

                <br></br>
                
                <div className="section no padding center"><i className="material-icons small iconStyle2" >help_outline</i></div>
                
            </div>
        )
    }
}

export default Nav
