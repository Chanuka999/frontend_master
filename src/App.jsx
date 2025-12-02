import React, { useState } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
//import Pizza from "./Pizza.jsx";
import Order from "./Order.jsx";
import PizzaOfTheDay from "./PizzaOfTheDay.jsx";
import { CartContext } from "./CartContext";
import Header from "./Header.jsx";
=======
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });
>>>>>>> ccd566c (add)

const App = () => {
  const cartHook = useState([]);

<<<<<<< HEAD
  return (
    <CartContext.Provider value={cartHook}>
      <div>
        <Header />
        <Order />

        <PizzaOfTheDay />
      </div>
    </CartContext.Provider>
  );
=======
  return <RouterProvider router={router} />;
>>>>>>> ccd566c (add)
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
