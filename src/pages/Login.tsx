import { SignLayout, InputLayout, Button } from '../style/Sign.styled';

const Login = () => {
  return (
    <SignLayout>
      <h1>로그인</h1>
      <InputLayout>
        <label htmlFor="email">이메일</label>
        <input type="text" id="email" data-testid="email-input" />
      </InputLayout>
      <InputLayout>
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" data-testid="password-input" />
      </InputLayout>
      <Button type="button" data-testid="signin-button">
        로그인하기
      </Button>
    </SignLayout>
  );
};

export default Login;
