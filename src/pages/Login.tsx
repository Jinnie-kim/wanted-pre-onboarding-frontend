import { LoginLayout, InputLayout, LoginButton } from '../style/Login.styled';
const Login = () => {
  return (
    <LoginLayout>
      <h1>로그인</h1>
      <InputLayout>
        <label htmlFor="email">이메일</label>
        <input type="text" id="email" />
      </InputLayout>
      <InputLayout>
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" />
      </InputLayout>
      <LoginButton type="button">로그인하기</LoginButton>
    </LoginLayout>
  );
};

export default Login;
