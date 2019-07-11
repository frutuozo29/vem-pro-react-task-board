const initialState = {
  board: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TASK':
      return {
        board: [...state.board, action.payload]
      }
    case 'DEL_TASK':
      return {
        board: [...state.board.filter(task => task !== action.task)]
      }
    case 'COMP_TASK':
      return {
        board: [...state.board.map(task => task.id === action.id ? { ...task, completed: true } : task)]
      }
    default:
      return state
  }
}

export default reducer