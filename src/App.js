import React, {Component} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import uuidv4 from 'uuid/v4';



class App extends Component {

    state = {
        tasks: [{content: 'Read 30 pages from the book', done: false, id: uuidv4()},
            {content: 'Write a letter', done: false, id: uuidv4()},
            {content: 'Prepare for tomorrow', done: true, id: uuidv4()}
        ],
        text: '',
        taskToEdit: 0,
    };

    onChangeInputValue = ({target: {value}}) => {
        this.setState({
            text: value
        })
    }

    setToDoDone = ({target: {id}}) => {
        const tasksCopy = [...this.state.tasks];
        const clickedTaskIndex = tasksCopy.findIndex((item => item.id === id))
        tasksCopy[clickedTaskIndex].done = !tasksCopy[clickedTaskIndex].done;
        this.setState(prevState => ({...prevState, tasks: tasksCopy }) )
    }

     addNewTask = () => {
        if (this.state.text === "") return;
        const newTask = {content: this.state.text, done: false, id: uuidv4()};
        this.setState(prevState => ({
            tasks: [newTask, ...prevState.tasks],
            text: '',
        }));
    }

    onDeleteTask = (id) => {
        this.setState(prevState => ({ tasks: prevState.tasks.filter(item => item.id !== id) }))
    }

    onEditTask = (id) => {
        const tasksCopy = [...this.state.tasks];
        const clickedTask = tasksCopy.find(item => item.id === id);
        const updatedContent = clickedTask.content;
        console.log(updatedContent);
        this.setState({  text: updatedContent, taskToEdit: id })
        //console.log(this.state);
    }

    addEditedTask = (id) => {
        if (this.state.text === "") return;
        const tasksCopy = [...this.state.tasks];
        const clickedTaskIndex = tasksCopy.findIndex((item => item.id === id))
        tasksCopy[clickedTaskIndex].content = this.state.text;
        this.setState(prevState => ({...prevState,
            tasks: tasksCopy,
            text: '',
            taskToEdit: 0,
        }));
    }


    render() {
         return (
            <div className="App">
                <div className='header'>
                    <p className='header-title'>To do list</p>
                </div>
                <TodoForm addNewTask={this.addNewTask} onChangeInputValue={this.onChangeInputValue} text={this.state.text} textInput = {this.textInput} onEditTask={this.onEditTask} taskToEdit = {this.state.taskToEdit}/>
                <TodoList tasks={this.state.tasks} onDeleteTask={this.onDeleteTask} onEditTask={this.onEditTask}
                          setToDoDone={this.setToDoDone} taskToEdit = {this.state.taskToEdit} addEditedTask={this.addEditedTask} onChangeInputValue={this.onChangeInputValue} text={this.state.text}/>
            </div>
        );
    }
}

export default App;
