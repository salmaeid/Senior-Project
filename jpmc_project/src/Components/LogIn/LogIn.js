import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';

export class LogIn extends Component {
    state = {
        userID: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className="row">
                <div className= "col s6 offset-s3">
                    <div className= "card grey lighten-1">
                        <div className= "card-content">

                            <div className= "card white">
                                <div className= "card-content">

                                    <div className= "input-field ">
                                    <label htmlFor= "userID">UserID</label>
                                    <input type="text" id="userID" onChange={this.handleChange}/>
                                    </div>
        
                                    <div className= "input-field ">
                                    <label htmlFor= "password">Password</label>
                                    <input type="password" id="password" onChange={this.handleChange}/>
                                    </div>
        
                                    <div className= "input-field">
                                    <Link to="/Dashboard"><button className="btn blue darken-4 z-depth-0">LogIn</button></Link>
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

export default LogIn
