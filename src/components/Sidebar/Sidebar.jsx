import React from 'react';
import style from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <nav>
        <ul>
          <li><span>Profile</span></li>
          <li><span>Messages</span></li>
          <li><span>News</span></li>
          <li><span>Music</span></li>
          <li><span>Settings</span></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
