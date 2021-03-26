import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        let todoItems = this.props.todolist.map((item)=> {
            return (
                <TodoItem key={item.no} todoitem={item} deleteTodo={this.props.deleteTodo} 
                    toggleDone={this.props.toggleDone} />
            )
        })

        return (
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        {todoItems}
                    </ul>
                </div>
            </div>

        );
    }
}

TodoList.propTypes = {
    todolist : PropTypes.arrayOf(PropTypes.object),
    toggleDone : PropTypes.func.isRequired,
    deleteTodo : PropTypes.func.isRequired
}

export default TodoList;