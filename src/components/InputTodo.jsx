import React from "react";

const InputTodo = ({ onClick, onChange, todoText, disabld }) => {
  //分割代入
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabld}
      />
      <button onClick={onClick} disabld={disabld}>
        追加
      </button>
    </div>
  );
};

export default InputTodo;
