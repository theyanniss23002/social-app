import React from 'react';
import style from './Dialogs.module.scss';
import DialogsListContainer from "../DialogsList/DialogsListContainer/DialogsListContainer";
import DialogsChatContainer from "../DialogsChat/DialogsChatContainer/DialogsChatContainer";

const Dialogs = () => {

  return (
    <div className={style.inlineContent}>
      <DialogsChatContainer/>
      <DialogsListContainer/>
    </div>
  )

}

export default Dialogs;
