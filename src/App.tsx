import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { Todo } from "./indextemp"


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = window.localStorage.getItem("todos")
    return storedTodos ? JSON.parse(storedTodos) : []
  })
  // useEffect는 이미 타입스크립트 내부에서 타입이 정의되어 있다고 함.
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  

  // 다크모드 생성 state. prevMode는 isDarkMode값을 가져오는 매개변수
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const toggleDarkMode = () => {
    console.log(isDarkMode)
    setIsDarkMode((prevMode) => !prevMode);
  };
  
  // 행복하기 버튼(todo 모두 삭제)
  const clickRemoveAllButtonHandler = () => {
    const answer = window.confirm("정말 모든 리스트를 지울건가요?");
    if (answer === true) {
      const answer2 = window.confirm("다시 한번 물어볼게요. 진짜 다 지워요??");
      if (answer2 === true) {
        setTodos([]);
      } else { 
        return false
      }
    } else {
      return false
    }
  };

  return (
    <div className={`screen ${isDarkMode ? "dark" : ""}`}>
      <div className="dark-mode-btn" onClick={toggleDarkMode}>
        {isDarkMode ? "🌛" : "🌞"}
      </div>
      <div className={"layout"}>
        <nav>
          <span>일해라 동준아</span>
          <button className="clear-all-btn" onClick={clickRemoveAllButtonHandler}>
            💣행복버튼🚫
          </button>
        </nav>
        <Input todos={todos} setTodos={setTodos} />

        <main>
          {/*===================================Working에 대한 부분(complete=!true이면 여기로)========================================*/}
          <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
          {/*===================================Done에 대한 부분(complete=true이면 여기로)========================================*/}
          <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
        </main>
      </div>
    </div>
  );
}

export default App;
