import { v4 as uuidv4 } from 'uuid'

export const createTodoWithId = (todo) => {
  return {
    ...todo,
    isComplited: false,
    id: uuidv4(),
  }
}
