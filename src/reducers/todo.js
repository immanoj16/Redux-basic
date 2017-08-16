const TODO_ADD = 'TODO_ADD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val})

const initState = {
  todos: [
    {id: 1, name: 'Render static UI', isComplete: true},
    {id: 2, name: 'Create initial state', isComplete: true},
    {id: 3, name: 'Render based on state', isComplete: true}
  ],
  currentTodo: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, todos: state.todos.concat(action.payload)}

    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}