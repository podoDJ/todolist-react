# todolist-react
스파르타코딩클럽 리액트 개인과제(todo list)
<h2>분리한 컴포넌트<h2>
```javaScript
const TodoRender = ({ item, clickRemoveButtonHandler, clickCheckCompleteButtonHandler }) => {
  return (
    <div className="check-border" key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
      <div className="btn-container">
        <button onClick={() => clickRemoveButtonHandler(item.id)}>삭제하기</button>
        <button onClick={() => clickCheckCompleteButtonHandler(item.id)}>{item.btnText}</button>
      </div>
    </div>
  );
};

export default TodoRender
```
