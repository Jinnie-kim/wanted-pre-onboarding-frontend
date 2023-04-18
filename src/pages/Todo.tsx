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
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<Todos[]>([]);
  const [todos, setTodos] = useState<Todos[]>([]);

  useEffect(() => {
    getTodo(token!).then((res) => setTodoList(res));
  }, []);

  useEffect(() => {
    setTodos(todoList);
  }, [todoList]);

  const submitTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      createTodo(token!, todo).then((res) => {
        setTodo('');
        setTodos([...todos, res]);
      });
    }
  };

  return (
    <TodoLayout>
      <h1>Todo</h1>
      <TodoInputLayout onSubmit={submitTodoHandler}>
        <TodoInput type="text" data-testid="new-todo-input" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <Button type="submit" data-testid="new-todo-add-button">
          추가
        </Button>
      </TodoInputLayout>
      <TodoBox>
        {todos &&
          todos.map((todo) => {
            return <TodoList key={todo.id} todo={todo} />;
          })}
      </TodoBox>
    </TodoLayout>
  );
};

export default Todo;
