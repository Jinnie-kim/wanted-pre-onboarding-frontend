import { createTodo } from '../api/todo';
import { useGlobalState } from '../store/GlobalContext';
import TodoList from '../components/TodoList';
import { TodoLayout, TodoInputLayout, TodoInput, Button, TodoBox } from '../style/Todo.styled';

const Todo = () => {
  const { token } = useGlobalState();

  const submitTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const todo = formData.get('todo') as string;
    createTodo(token!, todo);
  };

  return (
    <TodoLayout>
      <h1>Todo</h1>
      <TodoInputLayout onSubmit={submitTodoHandler}>
        <TodoInput type="text" data-testid="new-todo-input" name="todo" />
        <Button type="submit" data-testid="new-todo-add-button">
          추가
        </Button>
      </TodoInputLayout>
      <TodoBox>
        <TodoList todo="todo1" />
      </TodoBox>
    </TodoLayout>
  );
};

export default Todo;
