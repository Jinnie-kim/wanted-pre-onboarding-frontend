import { createContext, useReducer, Dispatch, useContext } from 'react';

type State = {
  token: string | null;
};

type Action = { type: 'GET_TOKEN'; token: string };

type TodoDispatch = Dispatch<Action>;

const GlobalContext = createContext<State>({ token: '' });
const GlobalDispatchContext = createContext<TodoDispatch>(() => null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'GET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  const [state, dispatch] = useReducer(reducer, { token: token });

  return (
    <GlobalContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const state = useContext(GlobalContext);
  if (!state) alert('찾을 수 없습니다.');

  return state;
};

export const useGlobalDispatch = () => {
  const dispatch = useContext(GlobalDispatchContext);
  if (!dispatch) alert('찾을 수 없습니다.');

  return dispatch;
};
