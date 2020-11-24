import React from 'react';
import DialogsChat from "../DialogsChat";
import {sendMyMessageActionCreator,
  listenNewMyMessageActionCreator}
  from "../../../../redux/dialogsReducer";

const DialogsChatContainer = (props) => {

  let state = props.store.getState();

  let sendMyMessage = () => {
    props.store.dispatch(sendMyMessageActionCreator())
  }

  let myMessageStateChange = (newMessage) => {
    // let newMessage = newMyMessageItem.current.value;
    props.store.dispatch(listenNewMyMessageActionCreator(newMessage))
  }

  return (
    <DialogsChat state={state.dialogs}
                 myNewMessages={state.dialogs.myNewMessages}
                 sendMyMessage={sendMyMessage}
                 myMessageStateChange={myMessageStateChange}

    />
  )
}

export default DialogsChatContainer;
