import React, { useContext } from "react";
import style from "./style.module.scss";
import { AiFillStar } from "react-icons/ai";
import Dropdown from "../Dropdown";
import { currentPageDataContext } from "../../services/dataContext"

export default function Index() {
  const data = useContext(currentPageDataContext)
  const splittedName = data.host.name.split(" ");
  let tags = data.tags.map((tag) => <div className={style.tag} key={tag}> {tag} </div>);
  const rating = () => {
    const hostRate = parseInt(data.rating);
    const filledStars = [];
    const emptyStars = [];
  
    for (let i = 0; i < hostRate; i++) {
      filledStars.push(
         <AiFillStar key={`filled-${i}`} className={`${style.filledStar} ${style.star}`} />
      );
    }
  
    for (let i = hostRate; i < 5; i++) {
      emptyStars.push(
        <AiFillStar key={`empty-${i}`} className={`${style.emptyStar} ${style.star}`} />
      );
    }
  
    return [...filledStars, ...emptyStars];
  };

  let equipments = data.equipments.map((stuff) => <li key={stuff}> {stuff} </li>);
  let listOfEquipments = <ul> {equipments} </ul>;

  return (
    <div className={style.container}>
      <div className={style.title__wrapper}>
        <h1 className={style.title}> {data.title} </h1>
        <h2 className={style.location}> {data.location}</h2>
      </div>
      <div className={style.host__wrapper}>
        <span> {splittedName[0]}</span>
        <span> {splittedName[1]}</span>
        <div className={style.host__avatar}>
          <img src={data.host.picture} alt="hote de l'appartement" />
        </div>
      </div>
      <div className={style.tags__wrapper}>{tags}</div>
      <div className={style.star__wrapper}>{rating()}</div>
      <div className={style.dropdown__wrapper}>
        <Dropdown title="Description" content={data.description} id={1} />
        <Dropdown title="Equipements" content={listOfEquipments} id={2} />
      </div>
    </div>
  );
}
