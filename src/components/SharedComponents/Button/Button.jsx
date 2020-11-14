import React from 'react';
import style from './Button.module.scss'

const Button = ({name, handleClick}) => {

  return (
    <button onClick={handleClick} className={style.button}>{name}</button>
  )

}

export default Button;
