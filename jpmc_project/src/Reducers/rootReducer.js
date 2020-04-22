import {loginUser, logoutUser, setToken, getToken, clearToken, fetchMessages, getLoggedinUser} from '../utils'

const initState = {
    clients:[
        {id: '1', userName: 'Salma Eid', userID:'salmaeid1', address:'2 Henry Avenue Macomb, MI 48042',clicked: false, typing: true, lastMessage: 'hello', apps:[true, true, false], messages:[], unread: 0 },
        {id: '2', userName: 'Rudy Prieto', userID:'rudy123', address:'94 Strawberry Rd. Millington, TN 38053', clicked: false,  typing: false, lastMessage: 'I can not find it', apps:[true, false, true], messages:[], unread: 0},
        {id: '3', userName: 'Joshua Remington', userID:'josh_rem', address:'563 El Dorado Street Orchard Park, NY 14127', clicked: false,  typing: true, lastMessage: 'yo', apps:[true, true, true], messages:[], unread: 0}
    ],

    checkings:[
        {id: '1', accountNo: '98818862',  routing: '34552109', intrate: '0.26%' , balance:'$15,051.50'},
        {id: '2', accountNo: '93828834',  routing: '34552109', intrate: '0.22%' , balance:'$54,687.96'},
        {id: '3', accountNo: '96815872',  routing: '34552109', intrate: '0.16%' , balance:'$6,140.34'}

    ],

    savings:[
        {id: '1', accountNo: '91215360',  routing: '90098766', intrate: '0.13%' , balance:'$60,051.50'},
        {id: '3', accountNo: '98318489',  routing: '90098766', intrate: '0.17%' , balance:'$10,233.00'}

    ],

    mortgage:[
        {id: '2', accountNo: '95245372',  intrate: '0.25%' , rembalance:'$5,020.00', payfee: '$500.00', nextpaydate:'4/1/2020'},
        {id: '3', accountNo: '91325665',  intrate: '0.15%' , rembalance:'$10,500.00', payfee: '$700.00', nextpaydate: '4/24/2020'}
    ],

    auth:[
        {userID: 'salmaeid123', password: '1234'},
        {userID: 'userExample', password: '1234qwer' }
    ],
    
    path: '/',
    authError: null,
    

    currentID: null,
    currentName: null,
    currentUserID: null,
    currentAddress: null,
    currentSavings: null,
    currentCheckings: null,
    currentMortgage: null,
    currentApps:[false, false, false],
    currentMessages: [],
    isAuthenticated: true,
    employeeID: '',
    managerID: 'manager_1',

    count: 0,
    authToken: ''

}
const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_CLIENT'){
        //let newApps = [false, false, false];
        let newApps = [...state.currentApps]
        let newCurrentID = state.currentID;
        let newCurrentUserID = state.currentUserID
        let newMessages = [...state.currentMessages]
        //updating clients
        let newClients = state.clients.filter(client => {
            return action.id !== client.id
        });
        //updating counter
        let newCount = state.count +1;
        
        if (newCurrentID === action.id) {
            newCurrentID = null
            newApps = [false, false, false]
            newCurrentUserID = null
            newMessages = [];
        }
        return{
            ...state,
            clients: newClients,
            count: newCount,
            currentID: newCurrentID,
            currentUserID: newCurrentUserID,
            currentApps:[...newApps],
            currentMessages: newMessages
        }
    }

    if(action.type === 'SELECT_CLIENT'){
        let newClients = [...state.clients];
        let newApps;
        let newSavings;
        let newCheckings;
        let newMortgae;
        let newName;
        let newAddress;
        let newUserID;
        let newMessages = [];
        
        // for(let i = 0; i < newClients.length; i++){
        //     if (newClients[i].id !== action.id) {
        //         newClients[i].clicked.back = 'transparent'; 
        //     }
        //     else{
        //         newClients[i].clicked.back = '#90a4ae';
        //     }
        // }
         for(let i = 0; i < newClients.length; i++){
            if (newClients[i].id !== action.id) {
                newClients[i].clicked = false; 
            }
            else{
                newClients[i].clicked = true;
                newApps = [...newClients[i].apps];
                newName = newClients[i].userName;
                newAddress = newClients[i].address;
                newUserID = newClients[i].userID;

                if (newApps[0]) {
                    newCheckings = state.checkings.filter(client => {
                        return action.id === client.id
                        
                    });
                }

                if (newApps[1]) {
                    newSavings = state.savings.filter(client => {
                        return action.id === client.id
                    });
                }

                if (newApps[2]) {
                    newMortgae = state.mortgage.filter(client => {
                        return action.id === client.id
                    });
                }
                 
                //fetch message
                let loggedIn = '';
                loggedIn = getLoggedinUser()

                console.log('logged in user:', loggedIn)
                console.log('talked to user:', newUserID)

               
               

                // delete messages array for that client 
                //scrolltoBottom
                //Mark messages as read
                // set unread counter back to 0 
        
                
            }
        }
        return{
            ...state,
            clients: newClients,
            currentID: action.id,
            currentApps: newApps,
            currentName: newName,
            currentUserID: newUserID,
            currentAddress: newAddress,
            currentCheckings: newCheckings,
            currentSavings: newSavings,
            currentMortgage: newMortgae,
            currentMessages: newMessages
            
            
        }
    }

    if(action.type === 'LOG_IN'){

        console.log('creds: ', action.credentials)
        let found = -1;
        let newPath = '/';
        let errorMessage = null;
        let newToken = '';
        let newEmployeeID = '';

        for(let x = 0; x < state.auth.length; x++){
            
            if ( (state.auth[x].userID === action.credentials.userID) && (state.auth[x].password === action.credentials.password) ) {
                found = 1;
                break;
                
            }
        }
        console.log(found)
        if(found === 1){
            
            loginUser(action.credentials.userID).then(
                User => {
                  console.log("Login1 successfully:", { User });
                  // User loged in successfully.
                 newEmployeeID = User.uid
                 console.log('Employee UID', newEmployeeID)
                },
                error => {
                  console.log("Login1 failed with exception:", { error });
                  // User login failed, check error and take appropriate action.
                }
              );

            
            
           
            

            newPath = '/Dashboard'
        }
        else if (found === -1) {
            errorMessage = 'Incorrect user ID or password'
        } 

        console.log(newPath)
            
        return{
            ...state,
            path: newPath,
            authError: errorMessage,
            authToken: newToken,
            employeeID: newEmployeeID
            
        }


    }

    if(action.type === 'LOG_OUT'){
        
        let newPath = '/';

        return{
            ...state,
            path: newPath
        }

    }

    if(action.type === 'SEND_MSG'){

        console.log('Message:', action.msg)
        console.log('To:',action.msg.receiver.uid )
        console.log('currentMessages:', state.currentMessages)

        
            
        return{
            ...state,
            currentMessages: [...state.currentMessages, action.msg]
            
        }

    }

    if(action.type === 'LISTEN_MSG'){

      
        console.log('Recieved Message:', action.msg)
        console.log('From:', action.msg.sender.uid)
        console.log('currentMessages:', state.currentMessages)

        


        return{
            ...state,
            currentMessages: [...state.currentMessages, action.msg]
            
        }

    }

    if(action.type === 'FETCH_MSG'){

        let newMessages = action.msg

        

        return{
            ...state,
            currentMessages: [...newMessages]
            
        }


    }

    if(action.type === 'GET_HELP'){

       console.log('in the get help function')
       
       let unclickAll = state.clients.map( client =>{
                client.clicked = false
                return client;
       })
       
       let newApps = [false, false, false]
       let newCurrentID = state.managerID
       let newMessages =[];
       //fetch previous items and put them in currentMessages
       //change currentUserID
       //send messages to managerID through changing currentUserID, add name too 

        

        return{
            ...state,
            clients: unclickAll,
            currentApps: newApps,
            currentUserID: newCurrentID,
            currentMessages: newMessages
        }


    }

    
    return state;
}
export default rootReducer