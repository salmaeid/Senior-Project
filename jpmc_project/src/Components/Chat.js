import React, { Component } from 'react'
import Send from './Send'
import {listenAction} from '../Actions/ClientActions'
import {connect} from'react-redux'
import {CometChat} from "@cometchat-pro/chat"
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import '../css/chat-css.css'

export class Chat extends Component {

    

    componentDidMount(){
        
        this.scrollToBottom();

        var listenerID = "UNIQUE_LISTENER_ID";

        CometChat.addMessageListener(
            listenerID,
            new CometChat.MessageListener({
                onTextMessageReceived: textMessage => {

                    if(textMessage.sender.uid === this.props.currentUserID){
                        this.props.listenAction(textMessage);
                    }
                    else{
                        alert('message received from: ', textMessage.sender.uid)
                        console.log(textMessage.sender.uid)
                    }
                    
                    // Handle text message
                }
            })
        );
 
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }
    

    scrollToBottom = () => {
      this.messagesEnd.scrollTop =this.messagesEnd.scrollHeight
        
    }

    render() {
        const currentMessages = this.props.currentMessages
        const chatList = currentMessages.length ?(
            currentMessages.map( message =>{
            
                return(

                    <div  className ={message.sender.uid === this.props.currentUserID? 'receiver-wrap': 'sender-wrap'} key={message.id}>
                        <p className={message.sender.uid === this.props.currentUserID? 'receiver-bubble': 'sender-bubble'}>{message.text}</p>
                    </div>
                )

            
            })
        )
        
        :(
            <div className = 'noMsg'> </div>

        )
        return (
            <div>
                <div className = 'chatWindow' ref={el => this.messagesEnd = el}>
                    {chatList}
                </div>
                <Send/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentUserID: state.currentUserID,
        currentMessages: state.currentMessages
    }

}

const mapDispatchToProps = (dispatch) =>{
    return{
        listenAction: (msg) => {dispatch( listenAction(msg))}
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
