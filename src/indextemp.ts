export interface Todo {
  id: string;
  title: string;
  content: string;
  complete: boolean;
}

export interface TodoProps {
  //Todo객체의 배열임을 보이기 위해 Todo[]로 todos의 타입을 변경함.
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  listIsDone: boolean;
}

export type TodoInputProps = Omit<TodoProps, "listIsDone">