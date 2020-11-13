import React from 'react';
import style from './SidebarFriends.module.scss';
import SidebarFriendsTicket from "../SidebarFriendsTicket/SidebarFriendsTicket";

const SidebarFriends = (props) => {
  return (
    <div className={style.friends}>
      <span className={style.friendsTitle}>My Friends</span>
      <div className={style.friendsWrap}>
        <SidebarFriendsTicket state={props.state.friends}/>
      </div>
    </div>
  )
}

export default SidebarFriends
