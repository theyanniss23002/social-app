import React from 'react';
import style from './DialogsChat.module.scss';
import DialogsChatFriendTicket from '../DialogsChatFriendTicket/DialogsChatFriendTicket'
import DialogsChatMyTicket from "../DialogsChatMyTicket/DialogsChatMyTicket";
import {sendMyMessageActionCreator, listenNewMyMessageActionCreator} from "../../../redux/dialogsReducer";

const DialogsChat = (props) => {

  let newMyMessageItem = React.createRef();

  let sendMyMessage = () => {
    props.dispatch(sendMyMessageActionCreator())
  }

  let myMessageStateChange = () => {
    let newMessage = newMyMessageItem.current.value;
    props.dispatch(listenNewMyMessageActionCreator(newMessage))
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
               onChange={myMessageStateChange}
               value={props.myNewMessages}
        />
        <button className={style.chatWriteSend} onClick={sendMyMessage} ></button>
      </div>
    </div>
  )
}

export default DialogsChat;
