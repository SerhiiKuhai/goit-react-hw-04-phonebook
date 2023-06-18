import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;

  margin-top: 10px;

  color: rgb(0, 0, 0);
  background-color: rgb(200, 200, 200);

  border-radius: 4px;
  border: 1px solid rgb(172, 172, 172);
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.2);

  padding: 6px 20px;
  font-weight: 600;
  cursor: pointer;

  &:hover,
  &:focus {
    color: rgb(250, 250, 250);
    background-color: rgb(50, 40, 185);
    box-shadow: 6px 6px 4px 2px rgba(0, 0, 0, 0.3);
  }
`;
