import React, { Component } from 'react';
import '../App.css';



class TodoList extends Component {
    labelStyle(item) {
       return item.done ? "task-label_through" : 'task-label';
    }

    onDelete = (id) => (event) => {
        event.preventDefault(event);
        this.props.onDeleteTask(id)
    }

    onEdit = (id) => (event) => {
        event.preventDefault(event);
        this.props.onEditTask(id)
    }

    addEditedTask= (id) => (event) => {
        event.preventDefault(event);
        this.props.addEditedTask(id)
    }



  render() {
    const tasksCopy  = [...this.props.tasks];
     return (
      <div className="tasks">
        <form>
        {tasksCopy.map(item =>
        item.id == this.props.taskToEdit ?
            (<div className="form edit-form" key = {item.id}>
                <form onSubmit = {this.addEditedTask(item.id)} >
                    <input className = 'input-task'
                           type = "text"
                           value = {this.props.text}
                           onChange = {this.props.onChangeInputValue}
                           placeholder = {item.content}
                           autoFocus = {true}
                           ref = {this.props.textInput}
                           onBlur={this.addEditedTask(item.id)}

                    />
                    <button type = "submit" className = "task-button task-button_done" onClick = {this.addEditedTask(item.id)}>
                    </button>
                </form>
            </div>) :
            (<div className="task" key = {item.id} >
               <label className = {this.labelStyle(item)} htmlFor = {item.id}>
                <input
                    className = "task-check"
                    type = 'checkbox'
                    id = {item.id}
                    checked = {item.done}
                    onChange = {this.props.setToDoDone}
                     />
                {item.content}
                </label>
                <div>
                  <button className = "task-button task-button_edit" onClick = {this.onEdit(item.id)}>
                  </button>
                  <button className = "task-button task-button_delete" onClick = {this.onDelete(item.id)}>
                  </button>
                </div>
            </div>)  )
        }
        </form>
      </div>
    );
  }
}

export default TodoList;


