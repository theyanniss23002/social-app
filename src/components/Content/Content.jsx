import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import style from './Content.module.scss'

function Content() {
  return (
    <div className={style.content}>
      <Sidebar/>
      <Profile/>
    </div>
  );
}

export default Content;
