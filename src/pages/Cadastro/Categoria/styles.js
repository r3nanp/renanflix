import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: column;

  margin-top: 5px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;

  &:hover{
    color: var(--primary);
    opacity: 0.7;
  }
`;
