import React from 'react'
import { FooterBase } from './styles'

function Footer() {
  return (
    <FooterBase>
      <a href="https://linkedin.com/in/r3nanp" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
          alt="Logo"
        />
      </a>
      <p>
        Orgulhosamente criado durante a {''}
        <a href="https://www.alura.com.br/" target="blank">Imersão React da Alura</a>
      </p>
    </FooterBase>
  )
}
export default Footer
