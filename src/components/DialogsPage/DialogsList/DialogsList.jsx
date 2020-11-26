import React from 'react';
import style from "./DialogsList.module.scss";
import DialogsListCard from "../DialogsListCard/DialogsListCard";

const DialogsList = (props) => {
  return (
    <div className={style.list}>
      <DialogsListCard state={props.dialogs.cardUsers}/>
    </div>
  )
}

export default DialogsList;
