import styled from 'styled-components';

export const SignLayout = styled.section`
  width: auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 40px;
    padding-bottom: 10px;
    margin-bottom: 140px;
    border-bottom: 1px solid dodgerblue;
  }
`;

export const InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 40px;
  label {
    margin-bottom: 10px;
  }
  input {
    width: 226px;
    height: 50px;
    border: 1px solid dodgerblue;
  }
`;

export const Button = styled.button`
  width: 118px;
  padding: 16px 21px;
  margin: 0 auto;
  border: 1px solid dodgerblue;
  &:hover {
    background-color: dodgerblue;
    color: #fff;
  }
`;
