import React, { Component } from 'react'
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
            <div className= "container">
                <form onSubmit={this.handleSubmit} className= "white">
                <h5 className= "grey-text text-darken-3">Chase</h5>

                <div className= "input-field">
                <label htmlFor= "userID">UserID</label>
                <input type="text" id="userID" onChange={this.handleChange}/>
                </div>

                <div className= "input-field">
                <label htmlFor= "password">Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
                </div>

                <div className= "input-field">
                <button className="btn blue darken-4 z-depth-0">LogIn</button>
                </div>

                </form>
                
            </div>
        )
    }
}

export default LogIn
