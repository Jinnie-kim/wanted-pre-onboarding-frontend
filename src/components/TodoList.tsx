import TodoItem from './TodoItem';
import { TodoBox } from '../style/Todo.styled';

interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface Todos {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Todos) => {
  return (
    <TodoBox>
      {todos?.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />;
      })}
    </TodoBox>
  );
};

export default TodoList;
