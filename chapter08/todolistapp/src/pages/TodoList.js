import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    let todoItems = props.states.todolist.map((item)=> {
        return (
            <TodoItem key={item.id} todoitem={item} callbacks={props.callbacks} />
        )
    })

    return (
        <>
        <div className="row">
            <div className="col p-3">
                <Link className="btn btn-primary" to="/todos/add">연락처 추가</Link>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <ul className="list-group">
                    {todoItems}
                </ul>
            </div>
        </div>
        </>
    );
};

TodoList.propTypes = {
    callbacks : PropTypes.object.isRequired,
    states : PropTypes.object.isRequired,
};

export default TodoList;