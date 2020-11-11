import React from 'react';
import Sidebar from "../Sidebar/SidebarCard/Sidebar";
import Profile from "../ProfilePage/Profile/Profile";
import Dialogs from "../DialogsPage/Dialogs/Dialogs";
import style from './Content.module.scss'
import {BrowserRouter, Route} from "react-router-dom";

const Content = (props) => {
  return (
    <BrowserRouter>
      <div className={style.content}>
        <Sidebar/>
        <Route path='/profile' render={ () => <Profile state={props.state.profile} /> }/>
        <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogs}/> }/>
      </div>
    </BrowserRouter>
  );
}

export default Content;
