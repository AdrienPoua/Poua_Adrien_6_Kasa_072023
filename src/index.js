import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Logement from "./pages/Logement";
import "./assets/styles/resets.scss"
import "./assets/styles/global.scss"


const router = createBrowserRouter([
  {
    path: "/Poua_Adrien_6_Kasa_072023", // Ajoutez le chemin de base ici
    children: [
      {
        path: "/", // Chemin pour la page d'accueil
        element: <Home />,
      },
      {
        path: "about", // Chemin pour la page "À propos"
        element: <About />,
      },
      {
        path: "location/:id", // Chemin pour la page de détail de l'emplacement
        element: <Logement />,
      },
      {
        path: "*", // Chemin pour toutes les autres pages (404)
        element: <NotFound />,
      },
    ],
  },
]);

// ...

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
