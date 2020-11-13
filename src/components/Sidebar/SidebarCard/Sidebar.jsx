import React from 'react';
import style from './Sidebar.module.scss';
import SidebarLink from "../SidebarLink/SidebarLink";
import SidebarFriends from "../SidebarFriends/SidebarFriends";

const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <nav>
        <ul>
          <SidebarLink state={props.state.links}/>
          <SidebarFriends state={props.state}/>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
