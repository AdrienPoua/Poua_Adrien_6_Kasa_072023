import React from "react";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/index";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={style.main}>
        <h1 className={style.main__title}> 404 </h1>
        <h2 className={style.main__subtitle}>
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/" className={style.main__link}>
          Retourner sur la page d'acceuil
        </Link>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
