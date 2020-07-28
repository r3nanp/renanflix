import React from 'react';

import { Main } from './styles.js';

import Menu from '../Menu';
import Footer from '../Footer';

function PageDefault(props) {
  return(
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