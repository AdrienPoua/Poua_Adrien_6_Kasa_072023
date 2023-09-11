import React, { useContext, useState } from "react";
import style from "./style.module.scss";
import { currentPageDataContext } from "../../services/dataContext";


export default function Index() {
  const { pictures } = useContext(currentPageDataContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  let imageElements = pictures.map((picture, index) => (
    <img
      className={index === currentIndex ? `${style.img} ${style.active}` : style.img}
      src={picture}
      alt="interieur de l'appartement"
      data-id={index}
      key={picture.substring(picture.length - 10)}
    />
  ));
  const handleClick = (e) => {
    e.currentTarget.children[0].classList.contains(style.left)
      ? setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        )
      : setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  return (
    <div className={style.container}>
      {imageElements}
      {pictures.length > 1 && (
        <>
          {" "}
          <div className={style.arrow__wrapper} onClick={handleClick}>
            <div className={`${style.arrow} ${style.left}`}></div>
          </div>
          <div className={style.arrow__wrapper} onClick={handleClick}>
            <div className={`${style.arrow} ${style.right}`}></div>
          </div>{" "}
        <div className={style.count}>
          {currentIndex + 1} / {pictures.length}
        </div>
        </>
      )}
    </div>
  );
}
