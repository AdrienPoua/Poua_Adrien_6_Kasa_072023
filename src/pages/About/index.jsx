import React from "react";
import DropDown from "../../components/Dropdown/index";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/index";
import Banner from "../../components/Banner/index";
import style from "./style.module.scss";
import mountain from "../../assets/images/mountain.png";


export default function About() {
  const dropdownContent = {
    Fiabilité:
      " Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les dropdownContentrmations sont régulièrement vérifiées par nos équipes.",
    Respect:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
    Service:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
    Sécurité:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectées. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes",
  };
  let menu = Object.entries(dropdownContent).map(([title, content], index) => (
    <DropDown title={title} content={content} id={index} key={title} />
  ));
  
  return (
    <>
      <header>
        <Header />
      </header>
      <Banner image={mountain} alt="Paysage montagneux" />
      <main className={style.main}>{menu}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
