import logo from './logo.svg'
import './App.css'

import TodoAppEnhance from './TodoAppEnhance/TodoAppEnhance'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoAppEnhance />
      </header>
    </div>
  )
}

export default App
