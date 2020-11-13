import React from 'react';
import style from './DialogsChat.module.scss';
import DialogsChatTicket from "../DialogsChatTicket/DialogsChatTicket";

const DialogsChat = (props) => {
  return (
    <div className={style.chat}>
      <DialogsChatTicket state={props.state.messages}/>
      <input className={style.chatArea} type="text" placeholder="Write your message..."/>
      <button className={style.chatSend}></button>
    </div>
  )
}

export default DialogsChat;
