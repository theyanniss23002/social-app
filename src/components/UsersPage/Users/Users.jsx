import React from 'react';
import style from './Users.module.scss'
import UsersCardContainer from '../UsersCard/UsersCardContainer/UsersCardContainer'

const Users = () => {
  return (
    <div className={`${style.columnContent} ${style.users}`}>
      <span className={style.usersTitle}>users list</span>
      <div className={style.usersGrid}>
        <UsersCardContainer/>
      </div>
    </div>
  )
}

export default Users;
