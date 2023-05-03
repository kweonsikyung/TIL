import React from "react";
import { RecoilRoot } from "recoil";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <RecoilRoot>
      <h1>Todo List</h1>
      <TodoInput />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
