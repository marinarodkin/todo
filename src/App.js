import React, {Component} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import uuidv4 from 'uuid/v4';


class App extends Component {

    state = {
        tasks: [{content: 'Пример задания 1', done: false, index: 1, id: uuidv4()},
            {content: 'Пример задания 2', done: false, index: 2, id: uuidv4()},
            {content: 'Пример задания 3', done: true, index: 3, id: uuidv4()}
        ],
        text: ''
    };

    onChange = ({target: {value}}) => {
        this.setState({
            text: value
        })
    }


    onClick = ({target: {id}}) => {

        const clickedTask = this.state.tasks[id];
        const updatedTask = {content: clickedTask.content, done: !clickedTask.done, index: clickedTask.index};
        const updatedTasks = this.state.tasks;
        const taskNumber = updatedTasks.indexOf(clickedTask);
        updatedTasks.splice(taskNumber, 1, updatedTask);
        this.setState({tasks: updatedTasks})
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const firstTask = this.state.tasks[0];
        const index = firstTask ? firstTask.index + 1 : 1;
        const newTask = {content: this.state.text, done: false, index: index};
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask],
            text: ''
        }));
    }

    deleteTask = (e) => {
        e.preventDefault();
        const target = e.target;
        const id = target.id.slice(1) * 1;
        this.setState(prevState => ({ tasks: prevState.tasks.filter(item => item.index !== id) }))
    }

    editTask = (e) => {
        e.preventDefault();
        const target = e.target;
        const id = target.id.slice(1) * 1;
        const tasks = this.state.tasks;
        const clickedTask = tasks.find(item => item.index === id);
        const updatedContent = clickedTask.content;
        const toupdateTasks = this.state.tasks;
        const updatedTasks = toupdateTasks.filter(item => item.index !== id);
        this.setState({tasks: updatedTasks, text: updatedContent})

    }

    render() {
        return (
            <div className="App">
                <div className='header'>
                    <p className='header-title'>To do list</p>
                </div>
                <TodoForm onSubmitForm={this.onSubmitForm} onChange={this.onChange} text={this.state.text}/>
                <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask}
                          onClick={this.onClick}/>
            </div>
        );
    }
}

export default App;
