import React from 'react';
import style from './SidebarLink.module.scss';
import {NavLink} from "react-router-dom";

const SidebarLink = () => {

  const linksPath = [
    {
      name: 'Profile',
      path: '/profile'
    },
    {
      name: 'Dialogs',
      path: '/dialogs',
    },
    {
      name: 'News',
      path: '/news',
    },
    {
      name: 'Music',
      path: '/audio',
    },
    {
      name: 'Settings',
      path: '/settings',
    }
  ]

  return (
    linksPath.map((link) => {
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
