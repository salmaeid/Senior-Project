import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from'react-redux'
import {logIn} from '../Actions/ClientActions'
import 'materialize-css/dist/css/materialize.min.css';
import '../css/login-css.css'


export class LogIn extends Component {

    state = {
        userID: '',
        password: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        this.props.logIn(this.state)

    }
    render() {
        const {path, authError} = this.props
        console.log('path: ', path)
        if (path === '/Dashboard'){
            return (
                <Redirect to= '/Dashboard'/>
            )
        }
        return (

           
            <div className ="container back">
            <div className= "row centerStyle1"></div>
            <div className="row ">

                <div className= "col s6 offset-s3">
                    <div className= "card grey lighten-1">
                        <div className= "card-content">

                            <div className= "card white">
                                <div className= "card-content">

                                    <form onSubmit={this.handleSubmit}>
                                        <div className= "input-field ">
                                            <label htmlFor= "userID">UserID</label>
                                            <input type="text" id="userID" onChange={this.handleChange}/>
                                        </div>
    
                                        <div className= "input-field ">
                                            <label htmlFor= "password">Password</label>
                                            <input type="password" id="password" onChange={this.handleChange}/>
                                        </div>
    
                                        <div className= "input-field center-align">
                                            <div className="red-text">
                                                {authError ? <p>{authError}</p>: null}
                                            </div>
                                            <button className="btn blue darken-2  z-depth-0" onClick={this.handleSubmit} >Log On</button>
                                
                                        </div>
                                    </form>
                                    
                                </div>
                            

                            </div> 
                            
                        </div>
                    </div>
                </div>

            </div>
            </div>
            
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        path: state.path,
        authError: state.authError
    }

}

const mapDispatchToProps = (dispatch) =>{
    return{
        logIn: (credentials) => {dispatch(logIn(credentials))}
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
