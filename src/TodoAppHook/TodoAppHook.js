import { useState } from 'react'

import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

import './TodoAppHook.css'

const TodoApp = () => {
    const [ items, setItems ] = useState([])

    const handleToggleTask = (id) => {
        // To do: toggle a state of to do item, show only text and when click strike though it
    }

    const addTask = (userInput) => {
        // To do: get the todo text and set to state
    }
  
    return (
        <div>
            <TodoHeader />
            { /* To do: pass parameter to be a props for TodoList */ }
            <TodoList />
            { /* To do: pass parameter to be a props for TodoForm */ }
            <TodoForm />
        </div>
    )
}

export default TodoApp