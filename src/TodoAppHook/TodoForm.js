import { useState } from 'react'

const TodoForm = ({
    addTask
}) => {
    const [ userInput, setUserInput ] = useState('')

    const handleChange = (e) => {
        // To do: update todo text here
    }

    const handleSubmit = () => {
        // To do: get the todo text and set to state
    }
    
    return (
        <div>
            <div>What needs to be done?</div>
            <input
                value={userInput}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>
                Add
            </button>
        </div>
    )
}

export default TodoForm