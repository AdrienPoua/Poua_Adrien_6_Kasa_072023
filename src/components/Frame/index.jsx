import React from "react";
import datas from "../../assets/data/data";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { url } from "../../variables";

export default function Index() {
  const item = datas.map((house) => (
      <Link to={`${url}/location/${house.id}`} key={house.id} className={style.frame}>
        {" "}
        <h2 className={style.title}> {house.title} </h2>{" "}
        {house.cover && (
          <img className={style.cover} src={house.cover} alt={house.title} />
        )}
      </Link>
  ));
  return <div className={style.container}>{item}</div>;
}
