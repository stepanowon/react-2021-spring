import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

@inject('todoStore')
@observer
class TodoItem extends Component {

    constructor() {
        super()
        this.deleteHandler = this.deleteHandler.bind(this);
        this.toggleHandler = this.toggleHandler.bind(this);
    }

    deleteHandler() {
        this.props.todoStore.deleteTodo(this.props.no);
    }

    toggleHandler() {
        this.props.todoStore.toggleDone(this.props.no);
    }

    render() {
        let itemClassName = "list-group-item";
        if (this.props.done) itemClassName +=" list-group-item-success";
        return (
            <li className={itemClassName}>
                <span className={this.props.done ? "todo-done pointer": "pointer"}
                    onClick={this.toggleHandler}>
                    {this.props.todo}{ this.props.done ? "(완료)" : "" } 
                </span>
                <span className="float-right badge badge-secondary pointer" 
                    onClick={this.deleteHandler}>삭제</span>
            </li>
        );
    }
}

TodoItem.propTypes = {
    no : PropTypes.number.isRequired,
    todo : PropTypes.string.isRequired,
    done : PropTypes.bool.isRequired
};

export default TodoItem;