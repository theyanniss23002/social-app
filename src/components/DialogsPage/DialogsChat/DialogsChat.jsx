import React from 'react';
import style from './DialogsChat.module.scss';
import DialogsChatFriendTicket from '../DialogsChatFriendTicket/DialogsChatFriendTicket'
import DialogsChatMyTicket from "../DialogsChatMyTicket/DialogsChatMyTicket";

const DialogsChat = (props) => {

  let newMyMessageItem = React.createRef();

  let sendMyMessage = () => {
    props.sendNewMyMessage();
  }

  let myMessageStateChange = () => {
    let item = newMyMessageItem.current.value;
    props.listenNewMyMessage(item);
  }

  return (
    <div className={style.chat}>
      <div id="upScroll" className={style.chatWrap}>
        <DialogsChatFriendTicket state={props.state.messages}/>
        <DialogsChatMyTicket state={props.state.myMessages}
                             sendNewMyMessage={props.sendNewMyMessage}
                             listenNewMyMessage={props.listenNewMyMessage}
        />
      </div>
      <div className={style.chatWrite}>
        <input className={style.chatWriteInput}
               type="text" placeholder="Write your message..."
               ref={newMyMessageItem}
               onChange={myMessageStateChange}
               value={props.myNewMessages}
        />
        <button className={style.chatWriteSend} onClick={sendMyMessage} ></button>
      </div>
    </div>
  )
}

export default DialogsChat;
