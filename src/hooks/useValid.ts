/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

interface ValueProp {
  email: string;
  password: string;
}

interface ValidTextProp {
  email: string;
  password: string;
}

interface ValidCheckProp {
  email: boolean;
  password: boolean;
}

const useValid = (value: ValueProp) => {
  const { email, password } = value;

  const [validationText, setValidationText] = useState<ValidTextProp>({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState<ValidCheckProp>({
    email: false,
    password: false,
  });

  useEffect(() => {
    if (email && email.includes('@')) {
      setValidationText({ ...validationText, email: '' });
      setIsValid({ ...isValid, email: true });
    } else if (!email) {
      setValidationText({ ...validationText, email: '' });
      setIsValid({ ...isValid, email: false });
    } else if (email && !email.includes('@')) {
      setValidationText({ ...validationText, email: '이메일은 @를 포함하세요.' });
      setIsValid({ ...isValid, email: false });
    }
  }, [email]);

  useEffect(() => {
    if (password && password.length >= 8) {
      setValidationText({ ...validationText, password: '' });
      setIsValid({ ...isValid, password: true });
    } else if (!password) {
      setValidationText({ ...validationText, password: '' });
      setIsValid({ ...isValid, password: false });
    } else if (password && password.length < 8) {
      setValidationText({ ...validationText, password: '비밀번호는 8자 이상 입력하세요.' });
      setIsValid({ ...isValid, password: false });
    }
  }, [password]);

  return [validationText, isValid];
};

export default useValid;
