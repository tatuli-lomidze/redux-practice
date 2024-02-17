import CreateTodoPage from "../pages/CreateTodo"
import DoneTodos from "../pages/DoneTodo"
import TodoListPage from "../pages/TodoList"

const routes = [
    {
        element: <CreateTodoPage/>,
        path: '/create'
    },
    {
        element: <TodoListPage/>,
        path: '/'
    },
    {
        element: <DoneTodos/>,
        path: '/done'
    }
    
]

export default routes