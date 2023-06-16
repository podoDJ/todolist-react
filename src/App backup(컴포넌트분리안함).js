import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [complete, setComplete] = useState(false); 굳이 얘로 쓸 필요가 없다. 왜냐? complete은 re-rendering에 쓰이지 않고 있기 때문이다. 130번째에서 필터 걸어서 가져가는 todo의 complete이랑 이 8번째 줄의 complete이랑은 다른 애임.
  const complete = false; // 따라서 complete은 그냥 변수(상수)로 지정해줘도 문제가 없다. 나중에 setComplete 자체만드로 re-rendering이 될 때 state를 쓰면 된다.
  // useRef : JS의 querySelector같은 기능. 이벤트가 발생한 아이(DOM??)을 지정한다. useRef자체는 렌더링하지 않고, state가 변화할 때 축적된 변경도 렌더링된다.
  const focusRef = useRef(); // useRef ::  submit한 뒤 커서를 제목에 옮기기 위한 수단인데 잘 모르겠음. 참고사이트 https://eundol1113.tistory.com/595

  // 제목 input창의 value를 title 훅에 넣기
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  // 내용 input창의 value를 content 훅에 넣기
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  // id: todos의 요소개수+1 / title&content: 위 두 handler로 넣은 값 / complete : 기본값 false
  const clickAddButtonHandler = () => {
    if (title.trim() === "") {
      alert("제목은 입력하셔요.(스페이스만 쳐도 안됨)");
    } else {
      const newTodo = {
        id: todos.length + 1,
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

  // 완료 목록으로 옮기는 함수. id일치하는 항목 찾아서 complete를 true로 변경
  const clickGotoDoneButtonHandler = (id) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = true;
      } 
      setTodos([...todos]);
    });
  };

  // 진행 목록으로 옮기는 함수. id일치하는 항목 찾아서 complete를 false로 변경
  const clickGotoWorkingButtonHandler = (id) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = false;
      }
      setTodos([...todos]);
    });
  };

  //삭제하기 버튼
  const clickRemoveButtonHandler = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  //행복하기 버튼
  const clickRemoveAllButtonHandler = () => {
    let answer = confirm("정말 모든 리스트를 지울건가요?");
    if (answer === true) {
      let answer2 = confirm("다시 한번 물어볼게요. 진짜 다 지워요??");
      if (answer2 === true) {
        setTodos([]);
      }
    }
  };

  // 엔터 누르면 추가하기
  const enterInput = (event) => {
    if (event.key === "Enter") {
      clickAddButtonHandler();
    }
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
    <div className="layout">
      <nav>
        <span>일해라 동준아</span>
        <button className="clear-all-btn" onClick={clickRemoveAllButtonHandler}>
          💣행복버튼🚫
        </button>
      </nav>
      <header>
        제목
        <input placeholder="뭐지? 일인가?" onFocus={focusPlaceHolderRemover} onBlur={blurTitlePlaceHolder} className="search-ipt" value={title} onChange={titleChangeHandler} onKeyUp={enterInput} ref={focusRef} />
        내용
        <input placeholder="뭐지? 무슨 일이지?" onFocus={focusPlaceHolderRemover} onBlur={blurContentPlaceHolder} className="search-ipt" value={content} onChange={contentChangeHandler} onKeyUp={enterInput} />
        <button onClick={clickAddButtonHandler}>추가하기</button>
      </header>
      <main>
        return <test />
        {/*===================================Working에 대한 부분(complete=false이면 여기로)========================================*/}
        <h1>☠️ 해치우자! ☠️</h1>
        <div className="working-list-container">
          {todos
            .filter((item) => item.complete === false)
            .map(function (item) {
              return (
                <div className="check-border" key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  <div className="btn-container">
                    <button onClick={() => clickRemoveButtonHandler(item.id)}>삭제하기</button>
                    <button onClick={() => clickGotoDoneButtonHandler(item.id)}>완료</button>
                  </div>
                </div>
              );
            })}
        </div>

        {/*===================================Done에 대한 부분(complete=true이면 여기로)========================================*/}
        <h1>💀 해치웠나? 💀</h1>
        <div className="done-list-container">
          {todos
            .filter((item) => item.complete === true)
            .map(function (item) {
              return (
                <div className="check-border" key={item.id}>
                  <h2>{item.title}</h2>
                  <div>{item.content}</div>
                  <div className="btn-container">
                    <button onClick={() => clickRemoveButtonHandler(item.id)}>삭제하기</button>
                    <button onClick={() => clickGotoWorkingButtonHandler(item.id)}>취소</button>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}
export default App;
