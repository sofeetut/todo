import * as a from './actionTypes'

export const addTodo = (newTodo) => {
  return {
    type: a.ADD_TODO,
    payload: newTodo,
  }
}

export const deleteTodo = (id) => {
  return {
    type: a.DELETE_TODO,
    payload: id,
  }
}

export const setComplited = (id) => {
  return {
    type: a.SET_COMPLITED,
    payload: id,
  }
}
