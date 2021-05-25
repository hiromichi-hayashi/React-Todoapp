import { useState, useEffect } from "react";
import InputTodo from "./components/InputTodo";
import IncompleteTodo from "./components/IncompleteTodo";
import CompleteTodo from "./components/CompleteTodo";
import "./style.css";

const App = () => {
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodo, todoText];
    setIncompleteTodo(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodo];
    newTodos.splice(index, 1);
    setIncompleteTodo(newTodos);
  };

  const onClickComplete = (todo, index) => {
    const newIncompleteTodos = [...incompleteTodo];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodo = [...completeTodo, incompleteTodo[index]];
    setIncompleteTodo(newIncompleteTodos);
    setCompleteTodo(newCompleteTodo);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodo];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodo = [...incompleteTodo, completeTodo[index]];
    setIncompleteTodo(newIncompleteTodo);
    setCompleteTodo(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabld={incompleteTodo.length >= 5}
      />
      {incompleteTodo.length >= 5 && (
        <p style={{ color: "red" }}>
          登録は５件までです。ToDoを消化して下さい。
        </p>
      )}
      <IncompleteTodo
        incompleteTodo={incompleteTodo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodo={completeTodo} onClickBack={onClickBack} />
    </>
  );
};

export default App;
