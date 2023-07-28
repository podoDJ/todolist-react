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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const react_1 = __importStar(require("react"));
const nanoid_1 = require("nanoid");
const Input = ({ todos, setTodos }) => {
    const [title, setTitle] = (0, react_1.useState)("");
    const [content, setContent] = (0, react_1.useState)("");
    const complete = false;
    const focusRef = (0, react_1.useRef)(null);
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const contentChangeHandler = (event) => {
        setContent(event.target.value);
    };
    const clickAddButtonHandler = (event) => {
        event.preventDefault();
        if (title.trim() === "") {
            alert("제목은 입력하셔요.(스페이스만 쳐도 안됨)");
        }
        else {
            const newTodo = {
                id: (0, nanoid_1.nanoid)(),
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
    const focusPlaceHolderRemover = (event) => {
        event.target.placeholder = "";
    };
    const blurTitlePlaceHolder = (event) => {
        event.target.placeholder = "뭐지? 일인가?";
    };
    const blurContentPlaceHolder = (event) => {
        event.target.placeholder = "뭐지? 무슨 일이지?";
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("form", { onSubmit: clickAddButtonHandler },
            "\uC81C\uBAA9",
            react_1.default.createElement("input", { placeholder: "\uBB50\uC9C0? \uC77C\uC778\uAC00?", onFocus: focusPlaceHolderRemover, onBlur: blurTitlePlaceHolder, className: "search-ipt", value: title, onChange: titleChangeHandler, ref: focusRef }),
            "\uB0B4\uC6A9",
            react_1.default.createElement("input", { placeholder: "\uBB50\uC9C0? \uBB34\uC2A8 \uC77C\uC774\uC9C0?", onFocus: focusPlaceHolderRemover, onBlur: blurContentPlaceHolder, className: "search-ipt", value: content, onChange: contentChangeHandler }),
            react_1.default.createElement("button", { type: "submit" }, "\uCD94\uAC00\uD558\uAE30"))));
};
exports.Input = Input;
exports.default = exports.Input;
