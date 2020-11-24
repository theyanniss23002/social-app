import React from 'react';
import style from './DialogsChat.module.scss';
import DialogsChatFriendTicket from '../DialogsChatFriendTicket/DialogsChatFriendTicket'
import DialogsChatMyTicket from "../DialogsChatMyTicket/DialogsChatMyTicket";

const DialogsChat = (props) => {

  let newMyMessageItem = React.createRef();

  let onSendMyMessage = () => {
    props.sendMyMessage();
  }

  let onMyMessageStateChange = () => {
    let newMessage = newMyMessageItem.current.value;
    props.myMessageStateChange(newMessage);
  }

  return (
    <div className={style.chat}>
      <div id="upScroll" className={style.chatWrap}>
        <DialogsChatFriendTicket state={props.state.messages}/>
        <DialogsChatMyTicket state={props.state.myMessages}
        />
      </div>
      <div className={style.chatWrite}>
        <input className={style.chatWriteInput}
               type="text" placeholder="Write your message..."
               ref={newMyMessageItem}
               onChange={onMyMessageStateChange}
               value={props.myNewMessages}
        />
        <button className={style.chatWriteSend} onClick={onSendMyMessage} ></button>
      </div>
    </div>
  )
}

export default DialogsChat;
