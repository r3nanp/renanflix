import React from 'react';

import { Main } from './styles.js';
import GlobalStyles from '../../GlobalStyles';

import Menu from '../Menu';
import Footer from '../Footer';

function PageDefault(props) {
  return(
    <>
      <GlobalStyles />
      <Menu />
        <Main>
          {props.children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault;