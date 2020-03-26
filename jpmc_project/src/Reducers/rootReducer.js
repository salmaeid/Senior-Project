const initState = {
    clients:[
        {id: '1', userName: 'Salma Eid', address:'2 Henry Avenue Macomb, MI 48042',clicked: false, typing: true, lastMessage: 'hello', apps:[true, true, false] },
        {id: '2', userName: 'Rudy Prieto', address:'94 Strawberry Rd. Millington, TN 38053', clicked: false,  typing: false, lastMessage: 'I can not find it', apps:[true, false, true] },
        {id: '3', userName: 'Joshua Remington', address:'563 El Dorado Street Orchard Park, NY 14127', clicked: false,  typing: true, lastMessage: 'yo', apps:[true, true, true] }
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
        {userID: 'salmaeid', password: '1234'},
        {userID: 'userExample', password: '1234qwer' }
    ],
    
    path: '/',
    authError: null,
    

    currentID: null,
    currentName: null,
    currentAddress: null,
    currentSavings: null,
    currentCheckings: null,
    currentMortgage: null,
    currentApps:[false, false, false],

    count: 0

}
const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_CLIENT'){
        let newClients = state.clients.filter(client => {
            return action.id !== client.id
        });
        let newCount = state.count +1;
        let newCurrentID = state.currentID;
        if (newCurrentID === action.id) {
            newCurrentID = null
        }
        return{
            ...state,
            clients: newClients,
            count: newCount,
            currentID: newCurrentID
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
            }
        }
        return{
            ...state,
            clients: newClients,
            currentID: action.id,
            currentApps: newApps,
            currentName: newName,
            currentAddress: newAddress,
            currentCheckings: newCheckings,
            currentSavings: newSavings,
            currentMortgage: newMortgae
            
        }
    }

    if(action.type === 'LOG_IN'){

        console.log('creds: ', action.credentials)
        let found = -1;
        let newPath = '/';
        let errorMessage = null;
        for(let x = 0; x < state.auth.length; x++){
            
            if ( (state.auth[x].userID === action.credentials.userID) && (state.auth[x].password === action.credentials.password) ) {
                found = 1;
                break;
                
            }
        }
        console.log(found)
        if(found === 1){
            newPath = '/Dashboard'
        }
        else if (found === -1) {
            errorMessage = 'Incorrect user ID or password'
        } 

        console.log(newPath)
            
        return{
            ...state,
            path: newPath,
            authError: errorMessage

            
        }


    }

    if(action.type === 'LOG_OUT'){

        let newPath = '/';

        return{
            ...state,
            path: newPath
        }

    }
    
    return state;
}
export default rootReducer