import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [inputTxt, setInputTxt] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeInput = (event) => {
    setInputTxt(event.target.value);
  };

  const onClickAdd = () => {
    // 空文字が追加されたらリターン
    if (inputTxt === "") return;
    const newTodos = [...incompleteTodos, inputTxt];
    setIncompleteTodos(newTodos);
    setInputTxt("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickDone = (index) => {
    // 移動
    const moveTodo = incompleteTodos[index];
    const newDoneTodos = [...completeTodos, moveTodo];
    setCompleteTodos(newDoneTodos);

    // 削除
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickBack = (index) => {
    const backTodo = completeTodos[index];
    const newTodos = [...incompleteTodos, backTodo];
    setIncompleteTodos(newTodos);

    const newDoneTodos = [...completeTodos];
    newDoneTodos.splice(index, 1);
    setCompleteTodos(newDoneTodos);
  };

  return (
    <>
      <InputTodo
        inputTxt={inputTxt}
        onChange={onChangeInput}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>警告メッセージ</p>
      )}

      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
