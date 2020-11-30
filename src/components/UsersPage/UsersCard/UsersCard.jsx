import React from 'react'
import style from './UsersCard.module.scss'
import * as axios from 'axios'
import defaultImage from '../../../assets/images/svg/profile-logo.svg'

class UsersCard extends React.Component {

  componentDidMount () {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      this.props.users.map((user) => {
        return <Card key={user.id} user={user} props={this.props}/>
      })
    )
  }
}

export default UsersCard

const Card = ({user, props}) => {
  const {unsubscribeUser, subscribeUser} = props;
  return (
    <div className={style.card}>
      <span className={style.cardName}>{user.name}</span>
      <span className={style.cardStatus}>{user.status}</span>
      <div className={style.cardLocation}>
        {/*<span className={style.cardLocationCountry}>{user.location.country}</span>*/}
        {/*<span className={style.cardLocationCity}>{user.location.city}</span>*/}
      </div>
      <div className={style.cardCircle}>
        <img className={style.cardCircleImage} src={user.photos.small != null ? user.photos.small : defaultImage}
             alt="ImageUser"/>
      </div>
      {user.subscribed
        ? <button onClick={() => {
          unsubscribeUser(user.id)
        }} className={style.cardSubscribe}>unsubcribe</button>
        : <button onClick={() => {
          subscribeUser(user.id)
        }} className={style.cardSubscribe}>subcribe</button>
      }
    </div>
  )
}
