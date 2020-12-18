import React from 'react';
import style from './DialogsChat.module.scss';
import DialogsChatFriendTicket from '../DialogsChatFriendTicket/DialogsChatFriendTicket'
import DialogsChatMyTicket from "../DialogsChatMyTicket/DialogsChatMyTicket";
import {useForm} from "react-hook-form";

const DialogsChat = (props) => {

  const {register, handleSubmit, watch, errors} = useForm()

  console.log(watch("post"))

  let item = props.dialogs;

  // let newMyMessageItem = React.createRef();

  // let onSendMyMessage = () => {
  //   props.sendMyMessage();
  // }

  // let onMyMessageStateChange = () => {
  //   let newMessage = newMyMessageItem.current.value;
  //   props.myMessageStateChange(newMessage);
  // }

  let addNewMessage = (data) => {
    console.log(data)
    props.sendMyMessage(data);
  }

  // setTimeout: (state.updateScroll, 0)

  return (
    <div className={style.chat}>
      <div id="upScroll" className={style.chatWrap}>
        <DialogsChatFriendTicket state={item.messages}/>
        <DialogsChatMyTicket state={item.myMessages}
        />
      </div>
      <form className={style.chatWrite} onSubmit={handleSubmit(addNewMessage)}>
        <input className={style.chatWriteInput}
               type="text" placeholder="Write your message..."
          // ref={newMyMessageItem}
          // onChange={onMyMessageStateChange}
          // value={props.myNewMessages}
               name={'message'}
               ref={register({
                 required: {
                   value: true,
                   message: 'This is a required field'
                 }
               })}
        />
        {errors.message && errors.message.type === "required" &&
        <span className={style.chatWriteError} role="alert">{errors.message.message}</span>}
        <button type={'submit'} className={style.chatWriteSend}/>
        {/*onClick={onSendMyMessage}*/}
      </form>
    </div>
  )
}

export default DialogsChat;
