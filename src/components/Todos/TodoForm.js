import { useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ onSubmit }) {
  const [todo, setTodo] = useState('')

  function handleInputChange(e) {
    setTodo(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(todo)
    setTodo('')
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <input type='text' value={todo} onChange={handleInputChange} />
      <button type='submit'>Submit!</button>
    </form>
  )
}

export default TodoForm
