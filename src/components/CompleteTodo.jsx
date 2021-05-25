import React from "react";

const CompleteTodo = ({ completeTodo, onClickBack }) => {
  return (
    <div className="complete-area">
      <p className="title">完了のTODOを追加</p>
      <ul>
        {completeTodo.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodo;
