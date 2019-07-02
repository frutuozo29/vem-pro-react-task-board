import React, { Component } from 'react';
import './App.css';
import { addTask } from './actions'
import { connect } from 'react-redux'


class App extends Component {
  state = {
    taskName: ''
  }

  render() {

    const { board } = this.props
    const { createTask } = this.props

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
          {board.map(task => <li key={task}>{task}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board
})

const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => dispatch(addTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
