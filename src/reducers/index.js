const initialState = {
  board: [],
  carregando: false,
  erro: false
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
    case 'GET_TASK_REQUEST':
      return {
        ...state,
        carregando: true
      }
    case 'GET_TASK_SUCESSO':
      return {
        ...state,
        carregando: false,
        board: action.payload
      }
    case 'GET_TASK_ERRO':
      return {
        ...state,
        erro: true,
        carregando: false
      }
    default:
      return state
  }
}

export default reducer