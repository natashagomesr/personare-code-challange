import * as React from "react";
import Container from "../../atoms/container/container";

import style from "./header.module.css";

function Header() {
  return (
    <header>
      <Container className={style.header}>
        <img
          className={style.img}
          src="/images/personare.png"
          alt="logo"
          height="80px"
        />
      </Container>
    </header>
  );
}

export default Header;
