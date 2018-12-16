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
                <input type = 'checkbox' id = {index}  checked = {item.done} onClick = {this.props.onClick}/>
                {item.content}
                </label>
                <div>
                  <button className = "task-button" onClick = {this.props.editTask} id = {`e${index}`}>✏</button>
                  <button className = "task-button" onClick = {this.props.deleteTask} id = {`d${index}`}>🚮</button>
                </div>
            </div>) )
        }
        </form>
      </div>
    );
  }
}

export default TodoList;
