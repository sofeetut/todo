import { useState } from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, countDone }) {
  const [selected, setSelected] = useState('all')

  function handleSelect(event) {
    setSelected(event.target.value)
  }

  function renderFilteredTodos() {
    switch (selected) {
      case 'complited':
        return todos.map(
          (todo) => todo.isComplited && <Todo key={todo.id} todo={todo} />
        )
      case 'uncomplited':
        return todos.map(
          (todo) => !todo.isComplited && <Todo key={todo.id} todo={todo} />
        )
      default:
        return todos.map((todo) => <Todo key={todo.id} todo={todo} />)
    }
  }

  if (!todos.length) {
    return <h2>Todo list is empty</h2>
  }

  return (
    <div className={styles.list}>
      <select
        value={selected}
        onChange={handleSelect}
        className={styles.select}
      >
        <option value='all' key='all'>
          All
        </option>
        <option value='complited' key='complited' disabled={!countDone}>
          Done
        </option>
        <option value='uncomplited' key='uncomplited' disabled={!countDone}>
          Waiting
        </option>
      </select>
      {renderFilteredTodos()}
    </div>
  )
}

export default TodoList
