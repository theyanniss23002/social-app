import React from 'react';
import logo from "../../assets/images/svg/logo.svg";
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <img className={style.headerImage} src={logo} alt=""/>
    </header>
  );
}

export default Header;
