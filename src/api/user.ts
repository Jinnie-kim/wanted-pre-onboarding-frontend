interface UserProp {
  email: string;
  password: string;
}

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

export const signup = async (data: UserProp) => {
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });

  return response;
};

export const signin = async (data: UserProp) => {
  const response = await fetch(`${BASE_URL}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });

  return await response.json();
};
