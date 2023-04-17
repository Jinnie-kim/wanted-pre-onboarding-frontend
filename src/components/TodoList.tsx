import { Todo } from '../style/Todo.styled';

interface TodoListProp {
  todo: string;
}

const TodoList = ({ todo }: TodoListProp) => {
  return (
    <Todo>
      <input type="checkbox" />
      <p>{todo}</p>
      <button type="button" data-testid="modify-button">
        수정
      </button>
      <button type="button" data-testid="delete-button">
        삭제
      </button>
    </Todo>
  );
};

export default TodoList;
