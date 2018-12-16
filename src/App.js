import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';


class App extends Component {

  state = {
    tasks: [{content: 'Пример задания 1', done: false},
           {content: 'Пример задания 2', done: false},
           {content: 'Пример задания 3', done: true}
     ],
      text: ''};

  onChange = ({ target: { value } }) => {
    this.setState({
    text: value})
  }

    onClick = ({ target: { id } }) => {
          const clickedTask = this.state.tasks[id];
          const updatedTask = {content: clickedTask.content, done: !clickedTask.done};
          const updatedTasks = this.state.tasks;
          updatedTasks.splice(id, 1, updatedTask);
          this.setState({tasks: updatedTasks})
    }

    onSubmitForm = (e) => {
      e.preventDefault();
      const newTask = {content: this.state.text, done: false};
      this.setState(prevState => ({
          tasks: [newTask, ...prevState.tasks],
          text: ''
      }));
  }

  deleteTask = (e) => {
      e.preventDefault();
      const id = e.target.id;
      const updatedTasks = this.state.tasks;
      updatedTasks.splice(id, 1);
      this.setState({tasks: updatedTasks})

  }

    editTask = (e) => {
        e.preventDefault();
        const target = e.target;
        const id = target.id.slice(1);
        console.log('id', id)
        const clickedTask = this.state.tasks[id];
        const updatedContent = clickedTask.content
        const updatedTasks = this.state.tasks;
        updatedTasks.splice(id, 1);
        this.setState({tasks: updatedTasks, text: updatedContent })
    }

  render() {
     return (
      <div className="App">
        <TodoForm onSubmitForm = {this.onSubmitForm} onChange = {this.onChange} text = {this.state.text}/>
        <TodoList tasks = {this.state.tasks} deleteTask = {this.deleteTask} editTask = {this.editTask} onClick = {this.onClick}/>
      </div>
    );
  }
}

export default App;
