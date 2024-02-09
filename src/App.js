import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, setComplited } from './redux/actionCreaters'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const select = useSelector((state) => state.todos)

  let countDone =
    select.length && select.filter((todo) => todo.isComplited).length

  function handleSubmit(todo) {
    const uniqId = uuidv4()
    if (todo.length <= 20 && todo.length >= 2) {
      const newTodo = { text: todo, id: uniqId, isComplited: false }
      dispatch(addTodo(newTodo))
    }
  }

  function handleDelete(id) {
    dispatch(deleteTodo(id))
  }

  function handleSetComplited(id) {
    dispatch(setComplited(id))
  }

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList
        todos={select}
        countDone={countDone}
        onClick={handleSetComplited}
        onDelete={handleDelete}
      />
      {!!select.length && (
        <div>
          <h3>Done: {countDone}</h3>
        </div>
      )}
    </div>
  )
}

export default App
