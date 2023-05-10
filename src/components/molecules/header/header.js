import * as React from 'react';
import Container from '../../atoms/container/container';

import style from './header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <Container>
        <img src="/images/personare.png" alt="logo" height="100px" width="100px" />
      </Container>
    </header>
  );
}

export default Header;
