import React, { Component } from 'react';

import '../App.css';

class TodoForm extends Component {
    addNewTask  = (event) => {
        event.preventDefault(event);
        this.props.addNewTask();
    }
  render() {

    return (
      <div className="form">
        <form onSubmit={this.addNewTask} >
            <input className = 'input-task'
                   type = "text"
                   value = {this.props.tasks.findIndex(item => item.isEdited === true) === -1 ? this.props.text : ''}
                   onChange = {this.props.onChangeInputValue}
                   placeholder = 'Добавьте новое задание'
                   autoFocus = {true}
                   ref = {this.props.textInput}
                   onBlur={this.addNewTask}
                   />
            <button type = "submit" className = "task-button task-button_done" onClick = {this.addNewTask}>
            </button>
        </form>

      </div>
    );
  }
}

export default TodoForm;
