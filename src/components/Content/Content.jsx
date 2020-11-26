import React from 'react';
import Profile from "../ProfilePage/Profile/Profile";
import Dialogs from "../DialogsPage/Dialogs/Dialogs";
import style from './Content.module.scss'
import {Route} from "react-router-dom";
import SidebarContainer from "../Sidebar/Sidebar/SidebarContainer/SidebarContainer";

const Content = () => {
  return (
      <div className={style.content}>
        <SidebarContainer/>
        <Route path='/profile' render={ () => <Profile/> }/>
        <Route path='/dialogs' render={ () => <Dialogs/> }/>
      </div>
  );
}

export default Content;
