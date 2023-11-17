import styles from './Todo.module.css'
import { RiTaskFill, RiTaskLine, RiDeleteBin5Fill } from 'react-icons/ri'

function Todo({ todo, onClick, onDelete }) {
  return (
    <div className={`${styles.todo} ${todo.isComplited ? styles.check : ''}`}>
      {todo.isComplited ? (
        <RiTaskFill
          onClick={() => onClick(todo.id)}
          className={styles.iconCheckDone}
        />
      ) : (
        <RiTaskLine
          onClick={() => onClick(todo.id)}
          className={styles.iconCheck}
        />
      )}
      <p>{todo.text}</p>
      <RiDeleteBin5Fill
        onClick={() => onDelete(todo.id)}
        className={styles.iconDel}
      />
    </div>
  )
}

export default Todo
