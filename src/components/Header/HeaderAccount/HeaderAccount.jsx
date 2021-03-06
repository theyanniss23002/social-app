import React from 'react'
import style from './HeaderAccount.module.scss'
import {NavLink} from "react-router-dom"

const HeaderAccount = (props) => {
  return (
    <div className={style.account}>
      {props.isAuth ? <span>{props.login}</span> : <div>
        <NavLink className={style.accountLogin} to={'/login'}>Login</NavLink>
        <NavLink className={style.accountRegistration} to={'/registration'}>Registration</NavLink>
      </div>}
    </div>
  )
}

export default HeaderAccount
