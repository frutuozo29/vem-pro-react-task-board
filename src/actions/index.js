const URL_API = 'http://liveposts-api.herokuapp.com/task'

export const addTask = (task) => (dispatch) => {

  fetch(URL_API, {
    headers: {
      "Content-Type": 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ name: task })
  })
}

export const delTask = (task) => ({
  type: 'DEL_TASK',
  task
})

export const compTask = (id) => ({
  type: 'COMP_TASK',
  id
})

const getTaskRequest = () => ({ type: 'GET_TASK_REQUEST' })

const getTaskSucesso = (tasks) => ({ type: 'GET_TASK_SUCESSO', payload: tasks })

const getTaskErro = () => ({ type: 'GET_TASK_ERRO' })

export const getTasks = () => (dispatch) => {
  dispatch(getTaskRequest())

  fetch(URL_API)
    .then(response => {
      if (!response.ok)
        throw new Error()

      return response.json()
    })
    .then(response => dispatch(getTaskSucesso(response.tasks)))
    .catch(() => dispatch(getTaskErro()))
}