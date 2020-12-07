import React from 'react'
import style from "./UsersCard.module.scss";
import defaultImage from "../../../assets/images/svg/profile-logo.svg";
import {NavLink} from "react-router-dom";

const UsersCard = (props) => {
  return (
    props.users.map((user) => {
      return <Card key={user.id} user={user} props={props}/>
    })
  )
}

export default UsersCard

const Card = ({user, props}) => {
  const {changeButtonState, subscription, unsubscription} = props;
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
        ? <button disabled={changeButtonState.some(id => id === user.id)}
                  onClick={() => {
                    unsubscription(user.id)
                  }}
                  className={style.cardSubscribe}>unsubcribe</button>
        : <button disabled={changeButtonState.some(id => id === user.id)}
                  onClick={() => {
                    subscription(user.id)
                  }}
                  className={style.cardSubscribe}>subcribe</button>
      }
    </div>
  )
}
