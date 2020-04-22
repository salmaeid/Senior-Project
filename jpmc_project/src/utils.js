import {CometChat} from "@cometchat-pro/chat"
import {COMETCHAT_CONSTANTS} from './consts'

  export function getToken(key) {
    const authToken = JSON.parse(localStorage.getItem(key))
    return authToken
  }

  export function setToken(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  export function clearToken(key) {
    localStorage.removeItem(key)
  }

  export async function loginUser(uid) {
    return await CometChat.login(uid, COMETCHAT_CONSTANTS.API_KEY)
  }

  export async function loginUserWithToken(authToken) {
    return await CometChat.login(authToken)
  }

  export async function logoutUser() {
    return await CometChat.logout()
  }

 

 

 export const scrollToBottom = () => {
    const chat = document.getElementById("chatWindow");
    if(chat !== null){
      chat.scrollToBottom = chat.scrollHeight;
      console.log('chat not equal to null')
    }
    else{
      console.log('chat is equal to null')
    }
    
  }
  
  
  export async function getLoggedinUser() {
    return CometChat.getLoggedinUser();
    
  }