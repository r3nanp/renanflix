/* eslint-disable linebreak-style */
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled(Link)`
  color: var(--white);
  background: var(--black);
  border: 1px solid var(--white);
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    a.ButtonLink {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }
  }
`

export default Button
