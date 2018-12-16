import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';


class App extends Component {

  state = {
    tasks: [{content: 'Повторить теорию Redux', done: false},
           {content: 'Написать Todo приложение', done: false},
           {content: 'Передалать компонент автокомплит', done: false},
           {content: 'перевести статью', done: true},
           {content: 'домашнее задание немецкий', done: true}
  ],
  text: ''};

  onChange = ({ target: { value } }) => {

    this.setState(prevState => ({
    text: value}))
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
        console.log('target', target)
        const id = target.id.slice(1);
        console.log('id', id)
        const clickedTask = this.state.tasks[id];
        console.log('clickedTask', clickedTask)
        const updatedContent = clickedTask.content
        const updatedTasks = this.state.tasks;
        updatedTasks.splice(id, 1);
        this.setState({tasks: updatedTasks, text: updatedContent })
    }

  render() {
    console.log('state', this.state);
    return (
      <div className="App">
        <TodoForm onSubmitForm = {this.onSubmitForm} onChange = {this.onChange}/>
        <TodoList tasks = {this.state.tasks} deleteTask = {this.deleteTask} editTask = {this.editTask} onClick = {this.onClick}/>
      </div>
    );
  }
}

export default App;
