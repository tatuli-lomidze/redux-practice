import { useSelector } from 'react-redux'

const DoneTodos = () => {
    const doneTodos = useSelector(state => state.todo.todoList.filter(todo => todo.done))
    

    return (
        <div>
            <h2>Completed Todos</h2>
          
                {doneTodos.map(todo => (
                    <h6 key={todo.id}>
                        {todo}</h6>
                ))}
       
        </div>
    )
}

export default DoneTodos

