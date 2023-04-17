import { useEffect, useState } from 'react';
import { createTodo, getTodo } from '../api/todo';
import { useGlobalState } from '../store/GlobalContext';
import TodoList from '../components/TodoList';
import { TodoLayout, TodoInputLayout, TodoInput, Button, TodoBox } from '../style/Todo.styled';

interface Todos {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const Todo = () => {
  const { token } = useGlobalState();
  const [todos, setTodos] = useState<Todos[]>();

  useEffect(() => {
    getTodo(token!).then((res) => setTodos(res));
  }, [todos]);

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
        {todos?.map((todo) => {
          return <TodoList key={todo.id} todo={todo.todo} />;
        })}
      </TodoBox>
    </TodoLayout>
  );
};

export default Todo;
