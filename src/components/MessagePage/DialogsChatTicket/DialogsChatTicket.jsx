import React from 'react';
import style from './DialogsChatTicket.module.scss';

const DialogsChatTicket = () => {

  const messages = [
    {
      id: 1,
      imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922686.svg',
      firstName: 'John',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolorum.',
      time: '10:30',
    },
    {
      id: 2,
      imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922627.svg',
      firstName: 'Ben',
      text: 'Lorem ipsum dolor sit amet',
      time: '7:01',
    },
  ]

  return (
    messages.map((message) => {
      return <Message key={message.id} message={message}/>
    })
  )

}

export default DialogsChatTicket;

const Message = ({message}) => {
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
