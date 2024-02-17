import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const DoneTodos = () => {
    const doneTodos = useSelector(state => state.todo.todoList.filter(todo => todo.done))
    

    return (
        <div>
            <h2>Completed Todos</h2>
          
                {doneTodos.map(todo => (<div key={todo.value}>  <p>{todo.id} </p> </div>
                ))}
                <br />
        <Link to={'/'} >To list</Link>
        <br />
       <Link to="/create"> Create </Link>
        </div>
    )
}

export default DoneTodos

