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

    onEdit = (id, content) => (event) => {
        event.preventDefault(event);
        this.props.onEditTask(id, content)
    }

    addEditedTask= (id, content) => (event) => {
        event.preventDefault(event);
        this.props.addEditedTask(id, content)
    }



  render() {
    const tasksCopy  = [...this.props.tasks];
     return (
      <div className="tasks">
        <form>
        {tasksCopy.map(item =>
        item.isEdited  ?
            (<div className="form edit-form" key = {item.id}>
                <form onSubmit = {this.onEdit(item.id, this.props.text)} >
                    <input className = 'input-task'
                           type = "text"
                           value = {this.props.text}
                           onChange = {this.props.onChangeInputValue}
                           placeholder = {item.content}
                           autoFocus = {true}
                           ref = {this.props.textInput}
                           onBlur={this.onEdit(item.id, this.props.text)}

                    />
                    <button type = "submit" className = "task-button task-button_done" onClick = {this.onEdit(item.id, this.props.text)}>
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
                  <button className = "task-button task-button_edit" onClick = {this.onEdit(item.id, item.content)}>
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


