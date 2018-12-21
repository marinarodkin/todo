import React, { Component } from 'react';

import '../App.css';

class TodoForm extends Component {
    onSubmitForm = (id) => (event) => {
        event.preventDefault(event);
        this.props.onSubmitForm(id)
    }
  render() {

    return (
      <div className="form">
        <form onSubmit={this.onSubmitForm(0)} >
            <input className = 'input-task'
                   type = "text"
                   value = {this.props.taskToEdit == 0 ? this.props.text : ''}
                   onChange = {this.props.onChange}
                   placeholder = 'Добавьте новое задание'
                   autoFocus = {true}
                   ref = {this.props.textInput}
                   />
        </form>

      </div>
    );
  }
}

export default TodoForm;
