import React, { Component } from 'react';
import './App.css';
import { addTask, delTask, compTask, getTasks } from './actions'
import { connect } from 'react-redux'


class App extends Component {
  state = {
    taskName: ''
  }

  componentDidMount() {
    const { getTasks } = this.props

    getTasks()
  }

  render() {

    const { board, carregando, erro } = this.props
    const { createTask, removeTask, completedTask } = this.props

    return (
      <div className="App">
        <header className="header">
          <h2>Vem pro React Task Board</h2>
        </header>
        <section className="content">
          <div className="input-container">
            <input
              value={this.state.taskName}
              onChange={(event) => this.setState({ taskName: event.target.value })}
              placeholder="Adicione uma nova task"
            ></input>
            <button
              className="button"
              onClick={() => {
                createTask(this.state.taskName)
                this.setState({ taskName: '' })
              }}
            >Adicionar Task</button>
          </div>
          <ul className="task-list">
            {board.map(task => (
              <li
                key={task._id}
                className="task-item"
              >
                <span className={task.completed ? 'completed' : ''}>
                  {task.name}
                </span>
                <button className="button" onClick={() => { removeTask(task) }}>
                  Remover
              </button>

                <button
                  className="button"
                  onClick={() => {
                    completedTask(task.id)
                  }}
                >
                  Concluir
              </button>
              </li>

            ))}
          </ul>
          {carregando && <h3>carregando...</h3>}
          {erro && <h3>Ocorreu um erro na requisi��o...</h3>}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board,
  carregando: state.carregando,
  erro: state.erro
})

const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => dispatch(addTask(task)),
  removeTask: (task) => dispatch(delTask(task)),
  completedTask: (id) => dispatch(compTask(id)),
  getTasks: () => dispatch(getTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
