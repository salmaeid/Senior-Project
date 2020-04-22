import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Reducers/rootReducer'
import {CometChat} from "@cometchat-pro/chat"
import {COMETCHAT_CONSTANTS} from './consts'

const store = createStore(rootReducer);

var appID = COMETCHAT_CONSTANTS.APP_ID;
var region = COMETCHAT_CONSTANTS.REGION;

var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();

CometChat.init(appID, appSetting).then(
    () => {
      console.log("Initialization completed successfully");
      // You can now call login function.
      ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    },
    error => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
