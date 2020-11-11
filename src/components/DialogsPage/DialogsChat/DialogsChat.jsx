import React from 'react';
import style from './DialogsChat.module.scss';
import DialogsChatTicket from "../DialogsChatTicket/DialogsChatTicket";

const DialogsChat = (props) => {
  return (
    <div className={style.chat}>
      <DialogsChatTicket state={props.state.messages}/>
    </div>
  )
}

export default DialogsChat;
