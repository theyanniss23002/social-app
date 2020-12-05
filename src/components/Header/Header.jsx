import React from 'react';
import logo from "../../assets/images/svg/logo.svg";
import style from './Header.module.scss';
import HeaderAccountContainer from "./HeaderAccount/HeaderAccountContainer/HeaderAccountContainer";

function Header() {
  return (
    <header className={style.header}>
      <img className={style.headerImage} src={logo} alt=""/>
      <HeaderAccountContainer/>
    </header>
  );
}

export default Header;
