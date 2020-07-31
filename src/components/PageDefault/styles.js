/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/prefer-default-export
import styled, { css } from 'styled-components';

export const Main = styled.main`
  flex: 1;
  padding: 50px 5%;
  background-color: var(--black);
  color: var(--white);

  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;
