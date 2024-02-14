export const addTodoAction = (payload) => {
    return {
        // type: TODO_ACTIONS,
        type: 'ADD_TODO',
        payload
    }
}

export const deleteTodoAction = (payload) => {
    return {
        type: 'DELETE_TODO',
        payload
    }
}

export const toggleTodoAction = (payload) => ({
    type: 'TOGGLE_TODO',
    payload
})