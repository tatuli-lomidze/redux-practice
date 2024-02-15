const initialState = {
    todoList: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': 
        return {
            todoList: [...state.todoList, action.payload]
        } 
        case 'DELETE_TODO':
        return {
            ...state,
            todoList: state.todoList.filter(todo => todo.id !== action.payload)
        }
        case 'TOGGLE_TODO':
    return {
        ...state,
        todoList: state.todoList.map(todo =>
            todo.id === action.payload ? { ...todo, done: true } : todo
        )
    }
        default: 
        return state
    }
}