import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState, Todo } from "../recoil/atoms";
import '../css/TodoItem.css';

const TodoItem = ({ item }: { item: Todo }) => {
  const setTodoList = useSetRecoilState(todoListState);

  const handleCheck = () => {
    setTodoList((oldList) =>
      oldList.map((todo) =>
        todo.id === item.id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const handleDelete = () => {
    setTodoList((oldList) => oldList.filter((todo) => todo.id !== item.id));
  };

  return (
    <li>
      <input type="checkbox" checked={item.isComplete} onChange={handleCheck} />
      <span>{item.text}</span>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
};

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoList;
