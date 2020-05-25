import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    handleEdit() {
        this.props.toggleEditMode(this.props.id, true);
    }

    handleToggleCompleted(boolean) {
        this.props.toggleCompleted(this.props.id, boolean);
    }


    render() {
        return (
            <div className="Todo">
                <div className="Todo-Check">
                    {this.props.isComplete ?
                        (<i className="fas fa-check-circle"
                            onClick={() => this.handleToggleCompleted(false)}></i>)
                        :
                        (<i className="far fa-circle"
                            onClick={() => this.handleToggleCompleted(true)}></i>)
                    }
                </div>

                <div className={`Todo-Text ${this.props.isComplete ? "complete" : null}`}
                     onDoubleClick={this.handleEdit}>
                    {this.props.value}
                </div>

                <div className="Todo-Buttons">
                    <i className="edit-button fas fa-edit"
                    onClick={this.handleEdit}></i>
                    <i className="delete-button fas fa-trash"
                    onClick={this.handleRemove}></i>
                </div>
            </div>
        )
    }
}

export default Todo;