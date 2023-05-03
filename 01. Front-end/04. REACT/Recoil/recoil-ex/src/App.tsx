import React from "react";
import { RecoilRoot } from "recoil";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import TodoListStats from "./components/TodoListStats";

function App() {
  return (
    <RecoilRoot>
      <h1>Todo List</h1>
      <TodoInput />
      <TodoList />
      <TodoListStats />
    </RecoilRoot>
  );
}

export default App;
