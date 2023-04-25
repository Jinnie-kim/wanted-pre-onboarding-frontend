import TodoItem from './TodoItem';
import { TodoListType } from '../type/todo';
import { TodoBox } from '../style/Todo.styled';

const TodoList = ({ todos, setTodos }: TodoListType) => {
  return (
    <TodoBox>
      {todos?.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />;
      })}
    </TodoBox>
  );
};

export default TodoList;
