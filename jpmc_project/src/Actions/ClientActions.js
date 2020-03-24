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