import React from "react";

const IncompleteTodo = ({ incompleteTodo, onClickComplete, onClickDelete }) => {
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODOを追加</p>
      <ul>
        {incompleteTodo.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(todo, index)}>
                  完了
                </button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IncompleteTodo;
