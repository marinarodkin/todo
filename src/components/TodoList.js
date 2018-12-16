import React, { Component } from 'react';
import '../App.css';

class TodoList extends Component {
  render() {
    const tasks = this.props.tasks;
    console.log('props.taskk', tasks)
    return (
      <div className="tasks">
        <form>
        {tasks.map((item, index) =>
            (<div className="task">
               <label htmlFor = {index}>
                <input type = 'checkbox' id = {index} onClick = {this.props.onClick} checked = {item.status}/>
                {item.content}
                </label>
            </div>) )
        }
        </form>
      </div>
    );
  }
}

export default TodoList;
