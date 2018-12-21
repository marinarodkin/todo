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

    onChange = ({target: {value}}) => {
        this.setState({
            text: value
        })
    }

    onClick = ({target: {id}}) => {
        const tasksCopy = [...this.state.tasks];
        const clickedTask = tasksCopy.find((item => item.id == id))
        const updatedTask = {content: clickedTask.content, done: !clickedTask.done, index: clickedTask.index, id: clickedTask.id};
        this.setState(prevState => ({tasks: [...prevState.tasks.filter(item => item.id != id),updatedTask ]}) )
    }

    onSubmitForm = (id) => {
        if (this.state.text === "") return;
        const newTask = {content: this.state.text, done: false, index:  1, id: uuidv4()};
        this.setState(prevState => ({
            tasks: [newTask, ...prevState.tasks.filter(item => item.id != id)],
            text: '',
            taskToEdit: 0,
        }));
    }

        onDeleteTask = (id) => {
        this.setState(prevState => ({ tasks: prevState.tasks.filter(item => item.id != id) }))
    }

    onEditTask = (id) => {
        const tasksCopy = [...this.state.tasks];
        const clickedTask = tasksCopy.find(item => item.id == id);
        const updatedContent = clickedTask.content;
        this.setState({  text: updatedContent, taskToEdit: id })
    }

    render() {
        return (
            <div className="App">
                <div className='header'>
                    <p className='header-title'>To do list</p>
                </div>
                <TodoForm onSubmitForm={this.onSubmitForm} onChange={this.onChange} text={this.state.text} textInput = {this.textInput} onEditTask={this.onEditTask} taskToEdit = {this.state.taskToEdit}/>
                <TodoList tasks={this.state.tasks} onDeleteTask={this.onDeleteTask} onEditTask={this.onEditTask}
                          onClick={this.onClick} taskToEdit = {this.state.taskToEdit} onSubmitForm={this.onSubmitForm} onChange={this.onChange} text={this.state.text}/>
            </div>
        );
    }
}

export default App;
