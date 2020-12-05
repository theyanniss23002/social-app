import React from 'react'
import style from "./UsersCard.module.scss";
import defaultImage from "../../../assets/images/svg/profile-logo.svg";
import {NavLink} from "react-router-dom";
import {followRest} from '../../../rest/rest'

const UsersCard = (props) => {

  return (
    props.users.map((user) => {
      return <Card key={user.id} user={user} props={props}/>
    })
  )

}

export default UsersCard

const Card = ({user, props}) => {
  const {unsubscribeUser, subscribeUser} = props;
  return (
    <div className={style.card}>
      <NavLink to={'/profile/' + user.id}>
        <span className={style.cardName}>{user.name}</span>
      </NavLink>
      <span className={style.cardStatus}>{user.status}</span>
      <div className={style.cardLocation}>
        {/*<span className={style.cardLocationCountry}>{user.location.country}</span>*/}
        {/*<span className={style.cardLocationCity}>{user.location.city}</span>*/}
      </div>
      <div className={style.cardCircle}>
        <img className={style.cardCircleImage} src={user.photos.small != null ? user.photos.small : defaultImage}
             alt="ImageUser"/>
      </div>
      {user.followed
        ? <button onClick={() => {
          followRest.deleteRequestUnsubscribeUser(user).then(data => {
            if (data.resultCode === 0) {
              unsubscribeUser(user.id)
            }
          })
        }} className={style.cardSubscribe}>unsubcribe</button>
        : <button onClick={() => {
          followRest.postRequestSubscribeUser(user).then(data => {
            if (data.resultCode === 0) {
              subscribeUser(user.id)
            }
          })
        }} className={style.cardSubscribe}>subcribe</button>
      }
    </div>
  )
}
