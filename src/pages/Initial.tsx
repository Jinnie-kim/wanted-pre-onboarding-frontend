import { useNavigate } from 'react-router-dom';
import { InitialLayout, ButtonLayout, Button } from '../style/Initial.styled';

const Initial = () => {
  const navigate = useNavigate();

  return (
    <InitialLayout>
      <h1>Todo</h1>

      <ButtonLayout>
        <Button
          onClick={() => {
            navigate('/signin');
          }}
        >
          로그인
        </Button>
        <Button
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </Button>
      </ButtonLayout>
    </InitialLayout>
  );
};

export default Initial;
