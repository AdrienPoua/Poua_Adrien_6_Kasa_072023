import React from "react";
import style from './style.module.scss'
import logo from '../../assets/images/logo.png'
import logoWhite from '../../assets/images/logoWhite.png'

export default function Logo(props) {
  return (
    <span className={style.container}>
      K <span className={style.house__wrapper}> <img className={style.house} src={props.color ? logoWhite : logo} alt="logo kasa" /></span>sa
    </span>
  );
}
