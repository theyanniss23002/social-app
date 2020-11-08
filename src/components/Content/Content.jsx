import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../ProfilePage/Profile/Profile";
import style from './Content.module.scss'

const Content = () => {
  return (
    <div className={style.content}>
      <Sidebar/>
      <Profile/>
    </div>
  );
}

export default Content;
