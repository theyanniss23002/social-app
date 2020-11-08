import React from 'react';
import style from './DialogsListCard.module.scss';

const DialogsListCard = () => {

  const cardUsers = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Konor',
      imgUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922686.svg'
    },
    {
      id: 2,
      firstName: 'Ben',
      lastName: 'Afleck',
      imgUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922627.svg'
    },
  ]

  return (
    cardUsers.map((user) => {
      return <User key={user.id} user={user}/>
    })
  )
}

export default DialogsListCard;

const User = ({user}) => {
  return (
    <div className={style.card}>
      <img className={style.miniImageProfile} src={user.imgUser} alt=""/>
      <div className={style.cardWrap}>
        <span className={style.cardWrapUser}>{user.firstName} {user.lastName}</span>
        <span className={style.cardWrapOpen}>Open Dialog</span>
      </div>
    </div>
  )
}
