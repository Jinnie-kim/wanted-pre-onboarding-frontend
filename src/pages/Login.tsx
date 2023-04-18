import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalDispatch } from '../store/GlobalContext';
import { signin } from '../api/user';
import useValidCheck from '../hooks/useValidCheck';
import { SignLayout, InputLayout, Button } from '../style/Sign.styled';

interface FormProps {
  email: string;
  password: string;
}

const Login = () => {
  const [formValue, setFormValue] = useState<FormProps>({
    email: '',
    password: '',
  });
  const [isdeActive, setIsdeActive] = useState<boolean>(true);
  const [validationText, isValid] = useValidCheck(formValue);
  const navigate = useNavigate();
  const dispatch = useGlobalDispatch();

  useEffect(() => {
    if (isValid.email && isValid.password) {
      setIsdeActive(false);
    } else {
      setIsdeActive(true);
    }
  }, [isValid]);

  const getUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const submitToSignin = (e: React.FormEvent) => {
    e.preventDefault();
    signin(formValue).then((res) => {
      if (res.statusCode === 401) {
        alert('비밀번호를 확인하세요.');
        return;
      } else if (res.statusCode === 404) {
        alert(res.message);
        return;
      } else {
        dispatch({ type: 'GET_TOKEN', token: res.access_token });
        localStorage.setItem('token', res.access_token);
        navigate('/todo');
      }
    });
  };

  return (
    <SignLayout>
      <h1>로그인</h1>
      <form onSubmit={submitToSignin}>
        <InputLayout>
          <label htmlFor="email">
            이메일 <span>{validationText.email}</span>
          </label>
          <input type="text" id="email" name="email" data-testid="email-input" onChange={getUserInfo} />
        </InputLayout>
        <InputLayout>
          <label htmlFor="password">
            비밀번호 <span>{validationText.password}</span>
          </label>
          <input type="password" id="password" name="password" data-testid="password-input" onChange={getUserInfo} />
        </InputLayout>
        <Button type="submit" data-testid="signin-button" disabled={isdeActive} deActive={isdeActive}>
          로그인하기
        </Button>
      </form>
    </SignLayout>
  );
};

export default Login;
