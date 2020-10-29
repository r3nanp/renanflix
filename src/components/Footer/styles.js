import styled from 'styled-components'

export const FooterBase = styled.footer`
  background: var(--outline);
  border-top: 2px solid var(--primary);
  padding: 32px 16px;
  color: var(--white);
  text-align: center;

  > a {
    cursor: pointer;
    > img {
      width: 40px;
      height: 40px;
      fill: var(--white);
      &:hover {
        color: var(--white);
      }
    }
  }
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`
