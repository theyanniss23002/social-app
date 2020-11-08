import React from 'react';
import style from './Dialogs.module.scss';
import DialogsList from "../DialogsList/DialogsList";
import DialogsChat from "../DialogsChat/DialogsChat";

const Dialogs = () => {
  return (
    <div className={style.inlineContent}>
      <DialogsChat/>
      <DialogsList/>
    </div>
  )
}

export default Dialogs;
