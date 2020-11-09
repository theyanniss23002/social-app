import React from 'react';
import style from './Button.module.scss'

const Button = ({name}) => {
  return (
    <button className={style.button}>{name}</button>
  )
}

export default Button;
