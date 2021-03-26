//useCallback 기능 추가
import React, { useState, useMemo, useCallback } from "react";

const getTodoListCount = todoList => {
  console.log("TodoList 카운트 : ", todoList.length);
  return todoList.length;
};

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = useCallback(
    todo => {
      let newTodoList = [...todoList, { id: new Date().getTime(), todo: todo }];
      setTodoList(newTodoList);
      setTodo("");
    },
    [todoList]
  );

  const deleteTodo = useCallback(
    id => {
      let index = todoList.findIndex(item => item.id === id);
      let newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  const todolistCount = useMemo(() => getTodoListCount(todoList), [todoList]);

  return (
    <div>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={() => addTodo(todo)}>Add Todo</button>
      <br />
      <ul>
        {todoList.map(item => (
          <li key={item.id}>
            {item.todo}&nbsp;&nbsp;
            <button onClick={() => deleteTodo(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <div>todo 갯수 : {todolistCount}</div>
    </div>
  );
};

export default App;
