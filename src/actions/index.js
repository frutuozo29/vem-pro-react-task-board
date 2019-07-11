export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: { id: Math.random(), name: task, completed: false }
})

export const delTask = (task) => ({
  type: 'DEL_TASK',
  task
})

export const compTask = (id) => ({
  type: 'COMP_TASK',
  id
})