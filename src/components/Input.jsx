import React, { useRef, useState } from "react";
// 진솔님한테 nanoid 배움. 먼저 bash에 yarn add nanoid 명령어로 설치해야 함.
import { nanoid } from "nanoid";
export const Input = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [complete, setComplete] = useState(!true); 굳이 얘로 쓸 필요가 없다. 왜냐? complete은 re-rendering에 쓰이지 않고 있기 때문이다. 124번줄에서 필터 걸어서 가져가는 todo의 complete이랑 이 8번째 줄의 complete이랑은 다른 애임.
  const complete = !true; // 따라서 complete은 그냥 변수(상수)로 지정해줘도 문제가 없다. 나중에 setComplete 자체만드로 re-rendering이 될 때 state를 쓰면 된다.
  // todo 입력 후 커서를 title input창에 위치. useRef : JS의 querySelector같은 기능. 이벤트가 발생한 아이(DOM??)을 지정한다. useRef자체는 렌더링하지 않고, state가 변화할 때 축적된 변경도 렌더링된다. 참고: https://eundol1113.tistory.com/595
  const focusRef = useRef();

  // 제목 input창의 value를 title 훅에 넣기
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  // 내용 input창의 value를 content 훅에 넣기
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  // id: todos의 요소개수+1 / title&content: 위 두 handler로 넣은 값 / complete : 기본값 !true / 
  const clickAddButtonHandler = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
      alert("제목은 입력하셔요.(스페이스만 쳐도 안됨)");
    } else {
      const newTodo = {
        id: nanoid(),
        title,
        content,
        complete,
      };
      setTodos([...todos, newTodo]);
      onReset();
      focusRef.current.focus();
    }
  };

  // input 초기화 함수
  const onReset = () => {
    setTitle("");
    setContent("");
  };

  // 인풋창 focus하면 placeholder 사라짐
  const focusPlaceHolderRemover = (event) => {
    event.target.placeholder = "";
  };
  // 인풋창에서 손 떼면 placeholder 생김.
  const blurTitlePlaceHolder = (event) => {
    event.target.placeholder = "뭐지? 일인가?";
  };
  // Q. 근데 이거 묶어서 하는 방법 없나???
  const blurContentPlaceHolder = (event) => {
    event.target.placeholder = "뭐지? 무슨 일이지?";
  };
  return (
    <div>
      <form onSubmit={clickAddButtonHandler}>
        제목
        <input placeholder="뭐지? 일인가?" onFocus={focusPlaceHolderRemover} onBlur={blurTitlePlaceHolder} className="search-ipt" value={title} onChange={titleChangeHandler} ref={focusRef} />
        내용
        <input placeholder="뭐지? 무슨 일이지?" onFocus={focusPlaceHolderRemover} onBlur={blurContentPlaceHolder} className="search-ipt" value={content} onChange={contentChangeHandler} />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
};

export default Input;
