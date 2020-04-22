import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import '../css/send-css.css'
import {connect} from'react-redux'
import { sendActionMessage} from '../Actions/ClientActions'
import {CometChat} from "@cometchat-pro/chat"

export class Send extends Component {

    state = {
        msg: ''
    }
    handleChange = (e) =>{

        this.setState({

            msg: e.target.value
            
        });
        //console.log('Message:', this.state)
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('sending...')
        console.log(this.state.msg)
        this.setState({

            msg: ''
            
        });
       
        var receiverID = this.props.currentUserID;
        var messageText = this.state.msg;
        var receiverType = CometChat.RECEIVER_TYPE.USER;
        var textMessage = new CometChat.TextMessage(
            receiverID,
            messageText,
            receiverType
        );
        if (this.props.currentUserID !== null){

            CometChat.sendMessage(textMessage).then(
                message => {
                    console.log("Message sent successfully:", message);
                    this.props.sendActionMessage(message)
                },
                 error => {
                    console.log("Message sending failed with error:", error);
                }
            );
        }
        else{

            alert('Click on a customer to send a message');
        }
        
        //this.props.sendActionMessage(this.state.msg)
        //calling comet chat sendMessage function
    }

    render() {
        return (
            <div className ='footer'>
                <form onSubmit={this.handleSubmit}>

                    <div className= 'inputField'>
                        <input type="text" id="sentMessage" value={this.state.msg} placeholder ='Type a message...' onChange={this.handleChange}/>
                    </div>

                    <div className='sendButton'>
                        <i className="material-icons small iconStyle" onClick={this.handleSubmit} >send</i>
                    </div>
                
                </form>
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentUserID: state.currentUserID
    }

}

const mapDispatchToProps = (dispatch) =>{
    return{
        sendActionMessage: (msg) => {dispatch( sendActionMessage(msg))}
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Send)
