import React from 'react';
import style from './DialogsChatFriendTicket.module.scss';

const DialogsChatFriendTicket = (props) => {

  return (
    props.state.map((message) => {
      return <FriendMessage key={message.id} message={message}/>
    })
  )

}

export default DialogsChatFriendTicket;

const FriendMessage = ({message}) => {
  return (
    <div className={style.ticket}>
      <img className={style.miniImageProfile} src={message.imageUser} alt="imageProfile"/>
      <div className={style.ticketWrap}>
        <div className={style.ticketWrapMessage}>
          <span className={style.ticketWrapMessageUser}>{message.firstName}</span>
          <span className={style.ticketWrapMessageText}>{message.text}</span>
        </div>
        <span className={style.ticketWrapDate}><strong>message sent:</strong> {message.time}</span>
      </div>
    </div>
  )
}
