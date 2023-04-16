import styled from 'styled-components';

export const InitialLayout = styled.section`
  width: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 40px;
    padding-bottom: 10px;
    margin-bottom: 190px;
    border-bottom: 1px solid dodgerblue;
  }
`;

export const ButtonLayout = styled.div`
  display: flex;
  gap: 50px;
`;

export const Button = styled.button`
  width: 118px;
  padding: 16px 21px;
  border: 1px solid dodgerblue;
  &:hover {
    background-color: dodgerblue;
    color: #fff;
  }
`;
