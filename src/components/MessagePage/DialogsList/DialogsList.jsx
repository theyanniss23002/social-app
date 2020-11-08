import React from 'react';
import style from "./DialogsList.module.scss";
import DialogsListCard from "../DialogsListCard/DialogsListCard";

const DialogsList = () => {
  return (
    <div className={style.list}>
      <DialogsListCard/>
    </div>
  )
}

export default DialogsList;
