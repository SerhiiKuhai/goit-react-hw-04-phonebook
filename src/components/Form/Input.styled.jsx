import styled from '@emotion/styled';

export const InputContact = styled.input`
  display: flex;
  width: 100%;
  height: 20px;

  border-style: none;
  border: 1px solid rgb(172, 172, 172);
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.2);

  padding: 4px;
  outline: none;
  margin-bottom: 20px;

  transition: 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  font-size: 18px;
  color: #212121;
  font-weight: 300;
  letter-spacing: 0.03em;

  &::placeholder {
    font-weight: 200;
  }
`;
