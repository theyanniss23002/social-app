import React from 'react';
import Sidebar from "../Sidebar/SidebarCard/Sidebar";
import Profile from "../ProfilePage/Profile/Profile";
import Dialogs from "../DialogsPage/Dialogs/Dialogs";
import style from './Content.module.scss'
import {Route} from "react-router-dom";
import Diagram from "../DiagramPage/Diagram";

const Content = (props) => {
  return (
      <div className={style.content}>
        <Sidebar state={props.state.sidebar}/>
        <Route path='/profile' render={ () => <Profile state={props.state.profile}
                                                       listenNewPostChange={props.listenNewPostChange}
                                                       addNewPost={props.addNewPost}
                                                       changePostItems={props.state.profile}/> }/>
        <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogs}
                                                       sendNewMyMessage={props.sendNewMyMessage}
                                                       listenNewMyMessage={props.listenNewMyMessage}
                                                       myNewMessages={props.state.dialogs}/> }/>
       <Route path='/diagram' render={ () =>  <Diagram getDataDiagram={props.getDataDiagram} /> }/>
      </div>
  );
}

export default Content;
