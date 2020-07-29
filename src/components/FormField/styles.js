import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  margin-top: 5px;

  &:hover {
    color: var(--frontEnd);
    opacity: 0.7;
  }
`;