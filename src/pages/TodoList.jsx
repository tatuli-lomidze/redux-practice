
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteTodoAction, toggleTodoAction } from "../store/todo/todo.action"

const TodoListPage = () => {
    const { todoList } = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const handleDelete = (todo) => {
        dispatch(deleteTodoAction(todo))
    }

    const handleToggle = (id) => {
        dispatch(toggleTodoAction(id));
    }
    

    return (
        <div>
            <h1>Todo List</h1>
            {todoList.map((todo) => (
                <div key={todo}>
                    <p>{todo}</p>
                    <button onClick={() => handleDelete(todo)}>Delete</button>
                </div>
            ))}

            <Link to="/create">To Create Page</Link>
            <br />

        </div>
    );
}

export default TodoListPage

