import React, { Component } from 'react'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import {deleteClient} from '../Actions/ClientActions'
import {selectClient} from '../Actions/ClientActions'
import '../css/clientTab-css.css'

export class ClientTabs extends Component {
    handleClick1 = (e, id) => {
        this.props.deleteClient(id)
        console.log('envoked1')
        e.stopPropagation()
        
       
    }
    handleClick2 = (id) =>{
        this.props.selectClient(id)
        console.log('envoked2')
    }
    render() {
        console.log(this.props)
        const {clients} = this.props
        const clientList = clients.length ?(
            clients.map(client => {
                return(
                    <div  key={client.id}>
                        
                        
                        <button className={client.clicked === true ? 'clientClicked': 'client'} onClick={ () => {this.handleClick2(client.id)}}>
                        
                            <i className="tiny material-icons right" onClick={ (e) => {this.handleClick1(e, client.id)}}>close</i>
                            <div className="clientName">{client.userName}</div>

                            { client.typing === true ? 
                                <div className="clientTabInfo">Typing...</div>
                                : <div className="clientTabInfo">{client.lastMessage}</div>
                            }
                            
                        </button>

                        <div className="divider"></div>
                        
                        
                    </div>
                    

                )
            })

        )
        : (
            <div className="center">Connecting clients...</div>

        )
        return (
            <div className="clientList">
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
        deleteClient: (id) => {dispatch(deleteClient(id))},
        selectClient: (id) => {dispatch(selectClient(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientTabs)
