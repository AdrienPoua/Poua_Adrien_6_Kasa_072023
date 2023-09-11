import React from "react";
import Footer from "../../components/Footer/index";
import Frame from "../../components/Frame/index";
import Header from "../../components/Header/index";
import Banner from "../../components/Banner/index";
import style from "./style.module.scss";
import beach from "../../assets/images/beach.png";

export default function index() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className={style.wrapper}>
        <Banner image={beach} alt={"petite plage au bord d'une falaise par temps brumeux"} />
        <h1 className={style.h1}> Chez vous, partout et ailleurs</h1>
      </div>
      <main className={style.main}>
        <Frame />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
