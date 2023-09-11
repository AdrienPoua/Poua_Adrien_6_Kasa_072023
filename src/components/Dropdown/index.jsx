import React, { useState } from "react";
import style from "./style.module.scss";

export default function Dropdown({ title, content, id }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.container}>
      <div className={style.dropdownBar}>
        <h3 className={style.dropdown__title}>{title}</h3>
        <div className={`${style.arrow__wrapper} ${isOpen ? style.open : ""}` }  onClick={handleClick}>
          <span className={style.arrow} />
        </div>
      </div>
      <div className={`${style.dropdown__content} ${isOpen ? style.open : ""}`} data-id={id}>
        {content}
      </div>
    </div>
  );
}
