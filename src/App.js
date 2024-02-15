import { useSelector } from 'react-redux'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

import './App.css'

function App() {
  const todoList = useSelector((state) => state.todos)

  let countDone =
    todoList.length && todoList.filter((todo) => todo.isComplited).length

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList todos={todoList} countDone={countDone} />
      {!!todoList.length && (
        <div>
          <h3>Done: {countDone}</h3>
        </div>
      )}
    </div>
  )
}

export default App
