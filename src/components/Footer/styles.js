import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--outline);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;

  > a{
    cursor: pointer;

    > img {
      width: 40px;
      height: 40px;
      background: var(--white);
    }
    &:hover{
      opacity: 1;
    }
  }
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
