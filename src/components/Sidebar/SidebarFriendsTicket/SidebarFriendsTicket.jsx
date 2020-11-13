import React from 'react';
import style from './SidebarFriendsTicket.module.scss'

const SidebarFriendsTicket = (props) => {
  return (
    props.state.map( item => <Friend key={item.id} item={item} /> )
  )
}

export default SidebarFriendsTicket;

const Friend = ({item}) => {
  return (
    <div className={style.ticket}>
      <img className={style.miniImageProfile} src={item.imgUser} alt="friendsImage"/>
      <div className={style.ticketWrap}>
        <span className={style.ticketTitle}>{item.firstName}</span>
      </div>
    </div>
  )
}
