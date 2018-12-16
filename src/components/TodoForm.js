import React, { Component } from 'react';

import '../App.css';

class TodoForm extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.onSubmitForm} >
            <input type = "text" value = {this.props.text} onChange = {this.props.onChange}/>
        </form>

      </div>
    );
  }
}

export default TodoForm;
