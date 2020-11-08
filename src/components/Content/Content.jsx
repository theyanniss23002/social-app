import React from 'react';
import Sidebar from "../Sidebar/SidebarCard/Sidebar";
import Profile from "../ProfilePage/Profile/Profile";
import Dialogs from "../MessagePage/Dialogs/Dialogs";
import style from './Content.module.scss'
import {BrowserRouter, Route} from "react-router-dom";

const Content = () => {
  return (
    <BrowserRouter>
      <div className={style.content}>
        <Sidebar/>
        <Route path='/profile' component={Profile}/>
        <Route path='/dialogs' component={Dialogs}/>
      </div>
    </BrowserRouter>
  );
}

export default Content;
