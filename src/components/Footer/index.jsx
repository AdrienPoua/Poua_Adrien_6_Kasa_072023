import React from "react";
import Logo from "../Logo";
import style from "./style.module.scss";

export default function Index() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.logo__wrapper}>
          <Logo color="white" />
        </div>
        <p> © 2020 Kasa. All rights reserved </p>
      </div>
    </div>
  );
}
