import React from 'react';
import style from './Dialogs.module.scss';
import DialogsList from "../DialogsList/DialogsList";
import DialogsChatContainer from "../DialogsChat/DialogsChatContainer/DialogsChatContainer";

const Dialogs = (props) => {

  let state = props.store.getState();

  return (
    <div className={style.inlineContent}>
      <DialogsChatContainer store={props.store} />
      <DialogsList state={state.dialogs}/>
    </div>
  )

}

export default Dialogs;
