"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function TodoList({ todos, setTodos, listIsDone }) {
    // 완료 목록으로 옮기는 함수. id일치하는 항목 찾아서 complete를 true로 변경
    const clickCheckCompleteButtonHandler = (id) => {
        const updateListedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return Object.assign(Object.assign({}, todo), { complete: !todo.complete });
            }
            return todo;
        });
        setTodos(updateListedTodos);
    };
    // 2023-07-28 : 조금 더 렌더링 되는 것이 직관적으로 보이기 위해 map함수로 변경.
    //   todos.forEach((todo) => {
    //     if (todo.id === id) {
    //       if (todo.complete === !true) {
    //         todo.complete = true;
    //       } else if (todo.complete === true) {
    //         todo.complete = !true;
    //       } else {
    //         alert("에러 : 완료여부 코드 이상");
    //       }
    //     }
    //     setTodos([...todos]);
    //   });
    // };
    // 삭제하기 버튼
    const clickRemoveButtonHandler = (id) => {
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, listIsDone ? "💀 해치웠나? 💀" : "☠️ 해치우자! ☠️"),
        react_1.default.createElement("div", { className: "working-list-container" }, todos
            .filter((item) => item.complete === listIsDone)
            .map(function (item) {
            return (react_1.default.createElement("div", { className: "check-border", key: item.id },
                react_1.default.createElement("h2", null, item.title),
                react_1.default.createElement("p", null, item.content),
                react_1.default.createElement("div", { className: "btn-container" },
                    react_1.default.createElement("button", { onClick: () => clickRemoveButtonHandler(item.id) }, "\uC0AD\uC81C\uD558\uAE30"),
                    react_1.default.createElement("button", { onClick: () => clickCheckCompleteButtonHandler(item.id) }, item.complete ? "취소" : "완료"))));
        }))));
}
exports.default = TodoList;
