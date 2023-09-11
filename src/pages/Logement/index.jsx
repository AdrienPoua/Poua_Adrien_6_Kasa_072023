import React from "react";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/index";
import Carousel from "../../components/Carousel/index";
import Logement from "../../components/Logement";
import style from "./style.module.scss";
import datas from "../../assets/data/data";
import { useParams, Navigate } from "react-router-dom";
import { currentPageDataContext } from "../../services/dataContext"

export default function Index() {
  const { id } = useParams();
  const [data] = datas.filter((element) => element.id === id);
  if (!data) {
   return <Navigate to="/error" />;
  }
  return (
    <>
      <header>
        <Header />
      </header>
      <currentPageDataContext.Provider value={data}>
       <Carousel />
      <main className={style.main}>
        <Logement  />
      </main>
      </currentPageDataContext.Provider >
      <footer>
        <Footer />
      </footer>
    </>
  );
}
