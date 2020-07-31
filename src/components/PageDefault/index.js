/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';

import '../../GlobalStyles.css';
import { Main } from './styles.js';

import Menu from '../Menu';
import Footer from '../Footer';

function PageDefault(props) {
  return (
    <>
      <Menu />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
