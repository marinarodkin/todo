import React, { Component } from 'react';
import TodoForm from './comonents.ToDoForm';
import TodoList from './comonents.ToDoList';
import './App.css';

class App extends Component {

  state = {
    tasks: [{content: 'Повторить теорию Redux', done: 'false'},
           {content: 'Написать Todo приложение', done: 'false'},
           {content: 'Передалать компонент автокомплит', done: 'false'},
           {content: 'перевести статью', done: 'true'},
           {content: 'домашнее задание немецкий', done: 'true'}
  ] }

  render() {
    return (
      <div className="App">
        <TodoForm/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
