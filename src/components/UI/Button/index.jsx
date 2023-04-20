import { React } from "react";

import style from './style.module.scss';

const Button = ({children, type = 'text', disabled = false, classNameOut = '' }) => {
  return (
    <button сlassName={`${style.button} ${classNameOut}`} type={type} disabled={disabled}> { children }</button>
  )
}

export  { Button }