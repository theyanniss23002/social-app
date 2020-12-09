import React from 'react';
import {Route} from "react-router-dom";
import style from './Content.module.scss'
import UsersContainer from "../UsersPage/Users/UsersContainer/UsersContainer";
import SidebarContainer from "../Sidebar/Sidebar/SidebarContainer/SidebarContainer";
import DialogsContainer from "../DialogsPage/Dialogs/DialogsContainer/DialogsContainer";
import ProfileContainer from "../ProfilePage/Profile/ProfileContainer/ProfileContainer";
import LoginContainer from '../LoginPage/LoginContainer/LoginContainer'

const Content = () => {
  return (
    <div className={style.content}>
      <SidebarContainer/>
      <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
      <Route path='/dialogs' render={() => <DialogsContainer/>}/>
      <Route path='/users' render={() => <UsersContainer/>}/>
      <Route path='/login' render={() => <LoginContainer/>}/>
    </div>
  );
}

export default Content;
