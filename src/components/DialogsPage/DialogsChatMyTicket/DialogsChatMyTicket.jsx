import React from 'react';
import style from './DialogsChatMyTicket.module.scss';

const DialogsChatMyTicket = (props) => {
  return (
    props.state.map( item => {
      return <MyMessage key={item.id} item={item}/>
    })
  )
}

export default DialogsChatMyTicket;

const MyMessage = ({item}) => {
  return (
    <div className={style.myTicket}>
      <div className={style.myTicketWrap}>
        <div className={style.myTicketWrapMessage}>
          <span className={style.myTicketWrapMessageUser}>{item.firstName}</span>
          <span className={style.myTicketWrapMessageText}>{item.text}</span>
        </div>
        <span className={style.myTicketWrapDate}><strong>message sent:</strong> {item.time}</span>
      </div>
      <img className={style.miniImageProfile} src={item.imageUser} alt="imageMyProfile"/>
    </div>
  )
}
