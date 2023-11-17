import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])

  let countDone =
    todoList.length && todoList.filter((todo) => todo.isComplited).length

  function handleSubmit(todo) {
    if (todo.length <= 20 && todo.length >= 2) {
      setTodoList([
        ...todoList,
        { id: uuidv4(), text: todo, isComplited: false },
      ])
    }
  }

  function handleDelete(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  function handleSetComplited(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isComplited: !todo.isComplited } : todo
      )
    )
  }

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList
        todos={todoList}
        onClick={handleSetComplited}
        onDelete={handleDelete}
      />
      {!!todoList.length && (
        <div>
          <h3>Done: {countDone}</h3>
        </div>
      )}
    </div>
  )
}

export default App
