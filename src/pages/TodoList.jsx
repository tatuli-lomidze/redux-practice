
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { deleteTodoAction, toggleTodoAction } from "../store/todo/todo.action"

const TodoListPage = () => {
    const { todoList } = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleDelete = (id) => {
        dispatch(deleteTodoAction(id))
    }

    const handleToggle = (id) => {
        dispatch(toggleTodoAction(id))
        navigate("/done")
    }
    

    return (
        <div>
            <h1>Todo List</h1>
            {todoList.map((todo) => (
                <div key={todo.id}>
                    <p>{todo}</p>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    <button onClick={() => handleToggle(todo.id)}>Done</button>

                </div>
            ))}

            <Link to="/create">To Create Page</Link>
            <br />

        </div>
    );
}

export default TodoListPage

