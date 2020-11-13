import React from 'react';
import style from './SidebarLink.module.scss';
import {NavLink} from "react-router-dom";

const SidebarLink = (props) => {
  return (
    props.state.map((link) => {
      return <LinkPath key={link.name} link={link}/>
    })
  )
}

export default SidebarLink;

const LinkPath = ({link}) => {
  return (
    <NavLink
      className={style.link}
      activeClassName={style.linkActive}
      to={link.path}
    >
      {link.name}
    </NavLink>
  );
}
