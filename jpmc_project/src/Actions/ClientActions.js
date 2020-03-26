//A function that is returning an action
export const deleteClient = (id) => {
    return{
        type: 'DELETE_CLIENT',
        id: id
    }
}

export const selectClient = (id) => {
    return{
        type: 'SELECT_CLIENT',
        id: id
    }
}

export const logIn = (credentials) => {
    return{
        type: 'LOG_IN',
        credentials: credentials
    }
}

export const logOut = () => {
    return{
        type: 'LOG_OUT'
    }
}