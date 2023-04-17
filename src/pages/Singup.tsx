import { SignLayout, InputLayout, Button } from '../style/Sign.styled';

const Signup = () => {
  return (
    <SignLayout>
      <h1>회원가입</h1>
      <InputLayout>
        <label htmlFor="email">이메일</label>
        <input type="text" id="email" data-testid="email-input" />
      </InputLayout>
      <InputLayout>
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" data-testid="password-input" />
      </InputLayout>
      <Button data-testid="signup-button">회원가입</Button>
    </SignLayout>
  );
};

export default Signup;
