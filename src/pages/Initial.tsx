import { InitialLayout, ButtonLayout, Button } from '../style/Initial.styled';

const Initial = () => {
  return (
    <InitialLayout>
      <h1>Todo</h1>

      <ButtonLayout>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </ButtonLayout>
    </InitialLayout>
  );
};

export default Initial;
