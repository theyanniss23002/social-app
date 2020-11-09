import React from 'react';
import style from './DialogsChat.module.scss';
import DialogsChatTicket from "../DialogsChatTicket/DialogsChatTicket";

const DialogsChat = () => {
  return (
    <div className={style.chat}>
      <DialogsChatTicket/>
    </div>
  )
}

export default DialogsChat;
