import React, { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { TodoInputProps } from "../indextemp";

export const Input = ({ todos, setTodos }: TodoInputProps) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const complete: boolean = false;
  const focusRef = useRef<HTMLInputElement>(null);

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const clickAddButtonHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
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
      if (focusRef.current) {
        focusRef.current.focus();
      }
    }
  };

  const onReset = () => {
    setTitle("");
    setContent("");
  };

  const focusPlaceHolderRemover: React.FocusEventHandler<HTMLInputElement> = (event) => {
    event.target.placeholder = "";
  };

  const blurTitlePlaceHolder: React.FocusEventHandler<HTMLInputElement> = (event) => {
    event.target.placeholder = "뭐지? 일인가?";
  };

  const blurContentPlaceHolder: React.FocusEventHandler<HTMLInputElement> = (event) => {
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
