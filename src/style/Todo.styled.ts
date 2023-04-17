import styled from 'styled-components';

export const TodoLayout = styled.section`
  width: auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 40px;
    padding-bottom: 10px;
    margin-bottom: 40px;
    border-bottom: 1px solid dodgerblue;
  }
`;

export const TodoInputLayout = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

export const TodoInput = styled.input`
  width: 295px;
  height: 40px;
  margin-right: 25px;
  border: 1px solid dodgerblue;
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;
  border: 1px solid dodgerblue;
  &:hover {
    background-color: dodgerblue;
    color: #fff;
  }
`;

export const TodoBox = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Todo = styled.li`
  display: flex;
  align-items: center;
  input {
    margin-right: 15px;
  }
  p {
    width: 200px;
    text-align: start;
  }
  button {
    width: 50px;
    padding: 5px;
    border: 1px solid dodgerblue;
    &:hover {
      background-color: dodgerblue;
      color: #fff;
    }
    &:first-of-type {
      margin-right: 15px;
    }
  }
`;
