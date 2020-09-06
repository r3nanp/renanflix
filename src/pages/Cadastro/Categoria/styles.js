/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Items = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  > li {
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const Span = styled.span`
  font-size: 15px;
  margin-top: 3px;
  color: red;
`

export const Heading = styled.h2`
  padding: 10px 0 20px;

  color: var(--white);
  font-size: 30px;
`
