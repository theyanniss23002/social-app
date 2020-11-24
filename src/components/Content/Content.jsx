import React from 'react';
import Sidebar from "../Sidebar/SidebarCard/Sidebar";
import Profile from "../ProfilePage/Profile/Profile";
import Dialogs from "../DialogsPage/Dialogs/Dialogs";
import style from './Content.module.scss'
import {Route} from "react-router-dom";

const Content = (props) => {

  let state = props.store.getState();

  return (
      <div className={style.content}>
        <Sidebar state={state.sidebar} />
        <Route path='/profile' render={ () => <Profile store={props.store} /> }/>
        <Route path='/dialogs' render={ () => <Dialogs store={props.store} /> }/>
      </div>
  );
}

export default Content;
