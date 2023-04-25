export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface TodoListType {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export interface TodoItemType {
  todo: TodoType;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}
