import { useState } from 'react'
import styles from './TodoForm.module.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../slices/todoSlice'
import { createTodoWithId } from '../../utils/utils'
import todos from '../../data/todos.json'

function TodoForm() {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  function handleInputChange(e) {
    setTodo(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (todo.length <= 20 && todo.length >= 2) {
      dispatch(addTodo(createTodoWithId({ text: todo })))
    }
    setTodo('')
  }

  function handleAddRandomTodo() {
    const randomIndex = Math.floor(Math.random() * todos.length)
    const randomTodo = todos[randomIndex]

    dispatch(addTodo(createTodoWithId(randomTodo)))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <input type='text' value={todo} onChange={handleInputChange} />
      <div>
        <button type='submit'>Submit!</button>
        <button type='button' onClick={handleAddRandomTodo}>
          Add random Todo
        </button>
      </div>
    </form>
  )
}

export default TodoForm
