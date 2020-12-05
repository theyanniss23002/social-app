import React from 'react';
import {Route} from "react-router-dom";
import style from './Content.module.scss'
import Dialogs from "../DialogsPage/Dialogs/Dialogs";
import UsersContainer from "../UsersPage/Users/UsersContainer/UsersContainer";
import SidebarContainer from "../Sidebar/Sidebar/SidebarContainer/SidebarContainer";
import ProfileContainer from "../ProfilePage/Profile/ProfileContainer/ProfileContainer";

const Content = () => {
  return (
    <div className={style.content}>
      <SidebarContainer/>
      <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
      <Route path='/dialogs' render={() => <Dialogs/>}/>
      <Route path='/users' render={() => <UsersContainer/>}/>
    </div>
  );
}

export default Content;
