import React from 'react';
import DialogsChat from "../DialogsChat";
import {sendMyMessageActionCreator,
  listenNewMyMessageActionCreator}
  from "../../../../redux/dialogsReducer";

const DialogsChatContainer = (props) => {

  let state = props.store.getState().dialogs;

  let sendMyMessage = () => {
    props.store.dispatch(sendMyMessageActionCreator())
  }

  let myMessageStateChange = (newMessage) => {
    // let newMessage = newMyMessageItem.current.value;
    props.store.dispatch(listenNewMyMessageActionCreator(newMessage))
  }

  return (
    <DialogsChat dialogs={state}
                 myNewMessages={state.myNewMessages}
                 sendMyMessage={sendMyMessage}
                 myMessageStateChange={myMessageStateChange}

    />
  )
}

export default DialogsChatContainer;
