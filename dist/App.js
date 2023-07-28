"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./App.css");
const Input_1 = __importDefault(require("./components/Input"));
const TodoList_1 = __importDefault(require("./components/TodoList"));
const App = () => {
    const [todos, setTodos] = (0, react_1.useState)(() => {
        const storedTodos = window.localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });
    // useEffect는 이미 타입스크립트 내부에서 타입이 정의되어 있다고 함.
    (0, react_1.useEffect)(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    // 다크모드 생성 state. prevMode는 isDarkMode값을 가져오는 매개변수
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const toggleDarkMode = () => {
        console.log(isDarkMode);
        setIsDarkMode((prevMode) => !prevMode);
    };
    // 행복하기 버튼(todo 모두 삭제)
    const clickRemoveAllButtonHandler = () => {
        const answer = window.confirm("정말 모든 리스트를 지울건가요?");
        if (answer === true) {
            const answer2 = window.confirm("다시 한번 물어볼게요. 진짜 다 지워요??");
            if (answer2 === true) {
                setTodos([]);
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    return (react_1.default.createElement("div", { className: `screen ${isDarkMode ? "dark" : ""}` },
        react_1.default.createElement("div", { className: "dark-mode-btn", onClick: toggleDarkMode }, isDarkMode ? "🌛" : "🌞"),
        react_1.default.createElement("div", { className: "layout" },
            react_1.default.createElement("nav", null,
                react_1.default.createElement("span", null, "\uC77C\uD574\uB77C \uB3D9\uC900\uC544"),
                react_1.default.createElement("button", { className: "clear-all-btn", onClick: clickRemoveAllButtonHandler }, "\uD83D\uDCA3\uD589\uBCF5\uBC84\uD2BC\uD83D\uDEAB")),
            react_1.default.createElement(Input_1.default, { todos: todos, setTodos: setTodos }),
            react_1.default.createElement("main", null,
                react_1.default.createElement(TodoList_1.default, { todos: todos, setTodos: setTodos, listIsDone: false }),
                react_1.default.createElement(TodoList_1.default, { todos: todos, setTodos: setTodos, listIsDone: true })))));
};
exports.default = App;
