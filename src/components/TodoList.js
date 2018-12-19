import React, { Component } from 'react';
import '../App.css';
import uuidv4 from 'uuid/v4';

class TodoList extends Component {
  render() {
    const tasksCopy  = [...this.props.tasks];
    tasksCopy.sort((a,b) => {
        if (b.index > a.index) return 1;
        if (a.index > b.index) return -1;
    })
    console.log( "tasksCopy", tasksCopy)
    return (
      <div className="tasks">
        <form>
        {tasksCopy.map((item, index) =>
            (<div className="task" key = {item.id} id = {item.index}>
               <label className = "task-label" htmlFor = {index}>
                <input className = "task-check" type = 'checkbox' id = {item.index}  checked = {item.done} onChange = {this.props.onClick}/>
                {item.content}
                </label>
                <div>
                  <button className = "task-button task-button_edit" onClick = {this.props.editTask} id = {`e${item.index}`}>
                  </button>
                  <button className = "task-button task-button_delete" onClick = {this.props.deleteTask} id = {`d${item.index}`}>
                  </button>
                </div>
            </div>) )
        }
        </form>
      </div>
    );
  }
}

export default TodoList;
