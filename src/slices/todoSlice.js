import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload]
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
    setComplited: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplited: !todo.isComplited }
          : todo
      )
    },
  },
})

export const { addTodo, deleteTodo, setComplited } = todoSlice.actions

export default todoSlice.reducer
