import React, { Component } from 'react';
import '../App.css';
import uuidv4 from 'uuid/v4';

class TodoList extends Component {
  render() {
    const tasks = this.props.tasks;
    tasks.concat().sort((a,b) => a.index - b.index)
    console.log( "tasks", tasks)
    return (
      <div className="tasks">
        <form>
        {tasks.map((item, index) =>
            (<div className="task" key = {item.id}>
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
