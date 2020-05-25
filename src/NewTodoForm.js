import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            newTodo: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            newTodo: ""
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <form className="NewTodoForm"
                  onSubmit={this.handleSubmit}>
                <label className="NewTodoForm-Label"
                       htmlFor="newTodo">+</label>
                <input 
                       className="NewTodoForm-Input"
                       name="newTodo"
                       value={this.state.newTodo}
                       onChange={this.handleChange}
                       placeholder="Add a Todo"
                />
                <button className="NewTodoForm-Button">
                    <i className="submit-button far fa-paper-plane"></i></button>
            </form>
        )
    }
}

export default NewTodoForm;