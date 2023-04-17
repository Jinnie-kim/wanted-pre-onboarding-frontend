import { useEffect, useState } from 'react';
import useValid from '../hooks/useValid';
import { SignLayout, InputLayout, Button } from '../style/Sign.styled';

interface FormProps {
  email: string;
  password: string;
}

const Signup = () => {
  const [formValue, setFormValue] = useState<FormProps>({
    email: '',
    password: '',
  });
  const [isdeActive, setIsdeActive] = useState<boolean>(true);
  const [validationText, isValid] = useValid(formValue);

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
  return (
    <SignLayout>
      <h1>회원가입</h1>
      <form>
        <InputLayout>
          <label htmlFor="email">
            이메일 <span>{validationText.email}</span>
          </label>
          <input type="email" id="email" name="email" data-testid="email-input" onChange={getUserInfo} />
        </InputLayout>
        <InputLayout>
          <label htmlFor="password">
            비밀번호 <span>{validationText.password}</span>
          </label>
          <input type="password" id="password" name="password" data-testid="password-input" onChange={getUserInfo} />
        </InputLayout>
        <Button data-testid="signup-button" disabled={isdeActive} deActive={isdeActive}>
          회원가입
        </Button>
      </form>
    </SignLayout>
  );
};

export default Signup;
