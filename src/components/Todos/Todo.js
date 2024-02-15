import { useDispatch } from 'react-redux'
import { setComplited, deleteTodo } from '../../slices/todoSlice'
import styles from './Todo.module.css'
import { RiTaskFill, RiTaskLine, RiDeleteBin5Fill } from 'react-icons/ri'

function Todo({ todo }) {
  const dispatch = useDispatch()

  function handleDelete(id) {
    dispatch(deleteTodo(id))
  }

  function handleSetComplited(id) {
    dispatch(setComplited(id))
  }

  return (
    <div className={`${styles.todo} ${todo.isComplited ? styles.check : ''}`}>
      <span onClick={() => handleSetComplited(todo.id)}>
        {todo.isComplited ? (
          <RiTaskFill className={styles.iconCheckDone} />
        ) : (
          <RiTaskLine className={styles.iconCheck} />
        )}
      </span>
      <p>{todo.text}</p>
      <RiDeleteBin5Fill
        onClick={() => handleDelete(todo.id)}
        className={styles.iconDel}
      />
    </div>
  )
}

export default Todo
