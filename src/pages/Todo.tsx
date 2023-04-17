import TodoList from '../components/TodoList';
import { TodoLayout, TodoInputLayout, TodoInput, Button, TodoBox } from '../style/Todo.styled';

const Todo = () => {
  return (
    <TodoLayout>
      <h1>Todo</h1>
      <TodoInputLayout>
        <TodoInput type="text" data-testid="new-todo-input" />
        <Button type="button" data-testid="new-todo-add-button">
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
