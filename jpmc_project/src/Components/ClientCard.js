import React, { Component } from 'react'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import {deleteClient} from '../Actions/ClientActions'

export class ClientCard extends Component {
    
    handleClick = (id) => {
        this.props.deleteClient(id)
    }
    
    render() {
        console.log(this.props)
        const {clients} = this.props
        const clientList = clients.length ? (
            clients.map( client => {
                return (
                    <div className="client card" key={client.id}>
                    <div className="card-content">
                        <span className="card-title red-text">{client.userName}</span>
                        <p>{client.password}</p>
                            <button className="btn gery" onClick={ () => {this.handleClick(client.id)}}>
                                Cancel
                            </button>
                        <div className="center">
                        </div>
                    </div>
                    
                    </div>
                )

            }

            )
        ) : (
            <div className="center">Loading clients...</div>

        )
        return (
            <div className="container home">
                {clientList}
            </div>
        )
        
    }
}
const mapStateToProps = (state) => {
    return{
        clients: state.clients
    }

}
const mapDispatchToProps = (dispatch) => {
    return{
        deleteClient: (id) => {dispatch(deleteClient(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClientCard)
