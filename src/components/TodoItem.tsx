import { useState } from 'react';
import { deleteTodo, updateTodo } from '../api/todo';
import { useGlobalState } from '../store/GlobalContext';
import { TodoItemType } from '../type/todo';
import { Todo, ModifyInput } from '../style/Todo.styled';

const TodoItem = ({ todo, todos, setTodos }: TodoItemType) => {
  const { token } = useGlobalState();
  const [todoItem, setTodoItem] = useState(todo.todo);
  const [IsTodoCheck, setIsTodoCheck] = useState<boolean>(todo.isCompleted);
  const [isModify, setIsModify] = useState<boolean>(false);

  const deleteTodoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    deleteTodo(token!, todo.id).then((res) => {
      if (res.status === 204) {
        setTodos(todos.filter((x) => x.id !== todo.id));
      }
    });
  };

  const updateTodoComplete = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsTodoCheck(checked);
    updateTodo(token!, todo.id, todoItem, checked);
  };

  const updateTodoText = () => {
    updateTodo(token!, todo.id, todoItem, IsTodoCheck).then((res) => {
      setIsModify(false);
      setTodoItem(res.todo);
      setTodos(todos.map((todoEl) => (todoEl.id === todo.id ? res : todoEl)));
    });
  };

  return (
    <Todo>
      <input type="checkbox" checked={IsTodoCheck} onChange={updateTodoComplete} />
      {isModify ? (
        <ModifyInput
          type="text"
          data-testid="modify-input"
          value={todoItem}
          onChange={(e) => {
            setTodoItem(e.target.value);
          }}
        />
      ) : (
        <p>{todo.todo}</p>
      )}
      {isModify ? (
        <>
          <button type="button" data-testid="submit-button" onClick={updateTodoText}>
            제출
          </button>
          <button
            type="button"
            data-testid="cancel-button"
            onClick={() => {
              setIsModify(false);
              setTodoItem(todo.todo);
            }}
          >
            취소
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            data-testid="modify-button"
            onClick={() => {
              setIsModify(true);
            }}
          >
            수정
          </button>
          <button type="button" data-testid="delete-button" onClick={deleteTodoHandler}>
            삭제
          </button>
        </>
      )}
    </Todo>
  );
};

export default TodoItem;
