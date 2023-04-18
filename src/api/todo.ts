const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

export const createTodo = async (token: string, todo: string) => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      todo: todo,
    }),
  });

  return await response.json();
};

export const getTodo = async (token: string) => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};

export const deleteTodo = async (token: string, id: number) => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export const updateTodo = async (token: string, id: number, todo: string, isCompleted: boolean) => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      todo: todo,
      isCompleted: isCompleted,
    }),
  });

  return await response.json();
};
