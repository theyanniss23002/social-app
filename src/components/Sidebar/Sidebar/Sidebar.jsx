import React from 'react';
import style from './Sidebar.module.scss';
import SidebarLink from "../SidebarLink/SidebarLink";
import SidebarFriends from "../SidebarFriends/SidebarFriends";

const Sidebar = (props) => {

  let state = props.sidebar

  return (
    <div className={style.sidebar}>
      <nav>
        <ul>
          <SidebarLink state={state.links}/>
          <SidebarFriends state={state}/>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
