import { React } from "react";

import style from './style.module.scss';

const Button = ({children, type = 'text', disabled = false }) => {
  return (
    <button сlassName={style.button} type={type} disabled={disabled}> { children }</button>
  )
}

export  { Button }