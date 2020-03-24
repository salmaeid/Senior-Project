const initState = {
    clients:[
        {id: '1', userName: 'salmaeid', clicked: false, typing: true, lastMessage: 'hello', apps:[true, true, false] },
        {id: '2', userName: 'rudy', clicked: false,  typing: false, lastMessage: 'I can not find it', apps:[true, false, true] },
        {id: '3', userName: 'fafa', clicked: false,  typing: true, lastMessage: 'yo', apps:[true, false, true] },
        {id: '4', userName: 'Nosa', clicked: false,  typing: false, lastMessage: 'yo', apps:[true, true, true] }
    ],

    checkings:[
        {id: '1', amount:1000},
        {id: '2', amount:2400},
        {id: '3', amount:5000},
        {id: '4', amount:5000}
    ],

    savings:[
        {id: '1', amount:1200},
        {id: '4', amount:5000}

    ],

    mortgage:[
        {id: '2', amount:10000},
        {id: '3', amount:5040},
        {id: '4', amount:5000}
    ],

    currentID: null,
    currentName: null,
    currentSavings: null,
    currentChechings: null,
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
            currentChechings: newCheckings,
            currentSavings: newSavings,
            currentMortgage: newMortgae
            
        }
    }
    
    return state;
}
export default rootReducer