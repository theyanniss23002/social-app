import React from 'react';
import style from './DialogsListCard.module.scss';
import {NavLink} from "react-router-dom";

const DialogsListCard = (props) => {
  return (
    props.state.map((user) => {
      return <User key={user.id} user={user} />
    })
  )
}

export default DialogsListCard;

const User = ({user}) => {
  let path = '/dialogs/' + user.id
  return (
    <NavLink to={path} className={style.card}>
      <img className={style.miniImageProfile} src={user.imgUser} alt=""/>
      <div className={style.cardWrap}>
        <span className={style.cardWrapUser}>{user.firstName} {user.lastName}</span>
        <span className={style.cardWrapOpen}>Open Dialog</span>
      </div>
    </NavLink>
  )
}
