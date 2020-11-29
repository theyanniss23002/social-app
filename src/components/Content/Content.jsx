import React from 'react';
import {Route} from "react-router-dom";
import style from './Content.module.scss'
import Profile from "../ProfilePage/Profile/Profile";
import Dialogs from "../DialogsPage/Dialogs/Dialogs";
import Users from "../UsersPage/Users/Users";
import SidebarContainer from "../Sidebar/Sidebar/SidebarContainer/SidebarContainer";

const Content = () => {
  return (
      <div className={style.content}>
        <SidebarContainer/>
        <Route path='/profile' render={ () => <Profile/> }/>
        <Route path='/dialogs' render={ () => <Dialogs/> }/>
        <Route path='/users' render={ () => <Users/> }/>
      </div>
  );
}

export default Content;
