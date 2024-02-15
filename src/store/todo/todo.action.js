export const addTodoAction = (payload) => {
    return {
        // type: TODO_ACTIONS,
        type: 'ADD_TODO',
        payload
    }
}

export const deleteTodoAction = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id,
    }
}

export const toggleTodoAction = (id) => ({
    type: 'TOGGLE_TODO',
    payload: id,
})