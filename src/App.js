import React, { Component } from 'react';
import './App.css';
import { addTask, delTask, compTask } from './actions'
import { connect } from 'react-redux'


class App extends Component {
  state = {
    taskName: ''
  }

  render() {

    const { board } = this.props
    const { createTask, removeTask, completedTask } = this.props

    return (
      <div className="App">
        <h2>Vem pro React Task Board</h2>
        <input
          value={this.state.taskName}
          onChange={(event) => this.setState({ taskName: event.target.value })}
          placeholder="Adicione uma nova task"
        ></input>
        <button
          onClick={() => {
            createTask(this.state.taskName)
            this.setState({ taskName: '' })
          }}
        >Adicionar Task</button>
        <ul>
          {board.map(task => (
            <li
              key={task.id}
              className="item"
            >
              <span className={task.completed ? 'completed' : ''}>
                {task.name}
              </span>
              <button onClick={() => { removeTask(task) }}>
                remover
              </button>

              <button
                onClick={() => {
                  completedTask(task.id)
                }}
              >
                Concluir
              </button>
            </li>

          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board
})

const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => dispatch(addTask(task)),
  removeTask: (task) => dispatch(delTask(task)),
  completedTask: (id) => dispatch(compTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
