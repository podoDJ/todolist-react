import React from "react";

export default function TodoList({ todos, setTodos, listIsDone }) {
  // 완료 목록으로 옮기는 함수. id일치하는 항목 찾아서 complete를 true로 변경
  const clickCheckCompleteButtonHandler = (id) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        if (todo.complete === !true) {
          todo.complete = true;
        } else if (todo.complete === true) {
          todo.complete = !true;
        } else {
          alert("에러 : 완료여부 코드 이상");
        }
      }
      setTodos([...todos]);
    });
  };

  // 삭제하기 버튼
  const clickRemoveButtonHandler = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };
  return (
    <>
      <h1>{listIsDone ? "💀 해치웠나? 💀" : "☠️ 해치우자! ☠️"}</h1>
      <div className="working-list-container">
        {todos
          .filter((item) => item.complete === listIsDone)
          .map(function (item) {
            return (
              <div className="check-border" key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <div className="btn-container">
                  <button onClick={() => clickRemoveButtonHandler(item.id)}>삭제하기</button>
                  <button onClick={() => clickCheckCompleteButtonHandler(item.id)}>{item.complete ? "취소" : "완료"}</button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
