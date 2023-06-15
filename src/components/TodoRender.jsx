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