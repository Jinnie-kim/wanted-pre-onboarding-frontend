import { useState } from 'react';
import { deleteTodo } from '../api/todo';
import { useGlobalState } from '../store/GlobalContext';
import { Todo } from '../style/Todo.styled';

interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface Todos {
  todo: TodoType;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

const TodoItem = ({ todo, todos, setTodos }: Todos) => {
  const { token } = useGlobalState();
  const [todoItem, setTodoItem] = useState(todo);
  const [IsTodoCheck, setIsTodoCheck] = useState<boolean>(todo.isCompleted);
  const [isModify, setIsModify] = useState<boolean>(false);

  const deleteTodoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    deleteTodo(token!, todo.id).then((res) => {
      if (res.status === 204) {
        setTodos(todos.filter((x) => x.id !== todo.id));
      }
    });
  };

  return (
    <Todo>
      <input type="checkbox" />
      <p>{todo.todo}</p>
      <button type="button" data-testid="modify-button">
        수정
      </button>
      <button type="button" data-testid="delete-button" onClick={deleteTodoHandler}>
        삭제
      </button>
    </Todo>
  );
};

export default TodoItem;
