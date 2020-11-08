import React from 'react';
import style from './Sidebar.module.scss';
import SidebarLink from "../SidebarLink/SidebarLink";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <nav>
        <ul>
          <SidebarLink/>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
