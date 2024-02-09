import * as a from './actionTypes'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_TODO:
      return [...state, action.payload]
    case a.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload)
    case a.SET_COMPLITED:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplited: !todo.isComplited }
          : todo
      )
    default:
      return state
  }
}

export default reducer
