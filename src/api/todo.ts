const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

export const createTodo = async (token: string, todo: string) => {
  await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      todo: todo,
    }),
  });
};
