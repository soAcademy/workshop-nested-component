import React from 'react'
import TodoList from './TodoList'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    // To do: initial state here
  }

  handleChange = (e) => {
    // To do: update todo text here
  }

  handleSubmit = (e) => {
      // To do: get the todo text and set to state
  }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          { /* To do: pass parameter to be a props for TodoList */ }
          <TodoList />
          <div>What needs to be done?</div>
            <input
              value={this.state.text}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>
              Add
            </button>
        </div>
      )
    }
}

export default TodoApp