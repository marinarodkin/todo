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
    console.log("on click input")
    this.setState(prevState => ({
    text: value}))
  }

    onSubmitForm = (e) => {
      e.preventDefault();
      const newTask = {content: this.state.text, done: 'false'};
      this.setState(prevState => ({
          tasks: [newTask, ...prevState.tasks],
          text: ''

      }));
  }

  render() {
    console.log('state', this.state);
    return (
      <div className="App">
        <TodoForm onSubmitForm = {this.onSubmitForm} onChange = {this.onChange}/>
        <TodoList tasks = {this.state.tasks} onClick = {this.onClick}/>
      </div>
    );
  }
}

export default App;
