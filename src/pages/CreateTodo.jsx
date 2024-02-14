import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoAction } from "../store/todo/todo.action"
import { Link } from "react-router-dom"

const CreateTodoPage = () => {
   
    const [value, setValue] = useState('')


    const dispatch = useDispatch()
    const onSubmit = (e) => {
    e.preventDefault()
 
    dispatch(addTodoAction(value))
    console.log(value);
    setValue('')

   }

    return <form onSubmit={onSubmit}> 
        <input value = {value} onChange = {e => setValue(e.target.value)} />
        <button>Submit</button>
         <br />
        <Link to={'/'} >To list</Link>
        <br />
       <Link to="/done"> Completed Todos</Link>
    </form>
}

export default CreateTodoPage