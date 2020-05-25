import React, { Component } from 'react';
import './EditTodoForm.css';

class EditTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editTodo: this.props.value
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.editTodo(this.props.id, this.state.editTodo);
        this.setState({
            editTodo: ""
        })
        this.props.toggleEditMode(this.props.id, false);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="EditTodoForm-Container">
                <div className='EditTodo-Check'>
                    <i className="far fa-circle"></i>
                </div>
                <form className="EditTodoForm"
                    onSubmit={this.handleSubmit}>
                    <input className="EditTodoForm-Input"
                        id="editTodo"
                        name="editTodo"
                        value={this.state.editTodo}
                        onChange={this.handleChange}
                    />
                    <button className="EditTodoForm-Button">
                        <i className="fas fa-check"></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default EditTodoForm;