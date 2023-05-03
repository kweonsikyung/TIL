import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/atoms";

const TodoCount = () => {
  const todoList = useRecoilValue(todoListState);

  const count = todoList.filter((item) => item.isComplete).length;

  return (
    <div>
      <p>완료한 투두의 갯수: {count}</p>
    </div>
  );
};

export default TodoCount;
