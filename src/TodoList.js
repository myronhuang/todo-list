import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm.js';
import Todo from './Todo.js';
import EditTodoForm  from './EditTodoForm.js'
import { v4 as uuid } from 'uuid';
import tester from './tester';
import './TodoList.css';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            todos: tester,
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }

    addTodo(todo) {
        let newTodo = {...todo, id: uuid(), isEditing: false, isComplete: false};
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }));
    }

    removeTodo(id) {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    }

    editTodo(id, edited) {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if(todo.id === id){
                    todo.newTodo = edited
                }
                return todo;
            })
        }));
    }

    toggleEditMode(id, boolean) {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if(todo.id === id){
                    todo.isEditing = boolean;
                }
                return todo;
            })
        }));
    }

    toggleCompleted(id, boolean) {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if(todo.id === id){
                    todo.isComplete = boolean;
                }
                return todo;
            })
        }));
    }

    renderTodos() {
        return (
            <ul>
                {this.state.todos.map(todo => (
                    
                    <li key={todo.id}>
                        {todo.isEditing ?
                            (<EditTodoForm
                                id={todo.id} 
                                value={todo.newTodo}
                                editTodo={this.editTodo}
                                toggleEditMode={this.toggleEditMode}
                            />)
                            :
                            (<Todo key={todo.id}
                                id={todo.id}
                                value={todo.newTodo}
                                isComplete={todo.isComplete}
                                removeTodo={this.removeTodo}
                                toggleEditMode={this.toggleEditMode}
                                toggleCompleted={this.toggleCompleted}
                            />)
                        }
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className="TodoList">
                <div className="Todos">
                    {this.renderTodos()}
                </div>

                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default TodoList;