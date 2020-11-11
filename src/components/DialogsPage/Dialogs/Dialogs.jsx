import React from 'react';
import style from './Dialogs.module.scss';
import DialogsList from "../DialogsList/DialogsList";
import DialogsChat from "../DialogsChat/DialogsChat";

const Dialogs = (props) => {

  return (
    <div className={style.inlineContent}>
      <DialogsChat state={props.state}/>
      <DialogsList state={props.state}/>
    </div>
  )
}

export default Dialogs;
