import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Dashborad extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Link to="/"><button className="btn blue darken-4 z-depth-0">LogOut</button></Link>
            </div>
        )
    }
}

export default Dashborad
