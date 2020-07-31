/* eslint-disable linebreak-style */
import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';

import Button from '../Button';
import './styles.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="RenanFlixlogo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>

  );
}

export default Menu;
