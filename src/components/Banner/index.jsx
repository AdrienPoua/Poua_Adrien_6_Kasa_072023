import React from "react";
import style from "./style.module.scss";

export default function Index({ image, alt }) {
  return (
    <div className={style.container}>
      <img className={style.banner__img} src={image} alt={alt}></img>
    </div>
  );
}
