import React from 'react'
import style from './UsersCard.module.scss'

const UsersCard = (props) => {
  return (
    props.users.map((user) => {
      return <User key={user.id} user={user}/>
    })
  )
}

export default UsersCard

const User = ({user}, props) => {
  debugger
  return (
    <div className={style.card}>
      <span className={style.cardName}>{user.firstName + ' ' + user.lastName}</span>
      <span className={style.cardStatus}>{user.status}</span>
      <div className={style.cardLocation}>
        <span className={style.cardLocationCountry}>{user.location.country}</span>
        <span className={style.cardLocationCity}>{user.location.city}</span>
      </div>
      <div className={style.cardCircle}>
        <img className={style.cardCircleImage} src={user.imageUser} alt="ImageUser"/>
      </div>
      {user.subscribed
        ? <button onClick={() => { props.unsubscribeUser(user.id) }} className={style.cardSubscribe}>unsubcribe</button>
        : <button onClick={() => { props.subscribeUser(user.id) }} className={style.cardSubscribe}>subcribe</button>
      }
    </div>
  )
}
