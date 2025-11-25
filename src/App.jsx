import React from "react";
import { createRoot } from "react-dom/client";
//import Pizza from "./Pizza.jsx";
import Order from "./Order.jsx";
import PizzaOfTheDay from "./PizzaOfTheDay.jsx";

const App = () => {
  return (
    <div>
      <h1>Pizza hut </h1>
      <Order />
      {/* <Pizza
        name="Pepperoni Feast"
        description="Loaded with spicy pepperoni slices on top of a rich mozzarella and tomato base."
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="BBQ Chicken Deluxe"
        description="Smoky BBQ sauce with grilled chicken, red onions, and cilantro for a sweet & savory flavor."
        image={"/public/pizzas/bbq_ckn.webp"}
      />
      <Pizza
        name="Margherita"
        description="A classic Italian pizza topped with fresh mozzarella, basil leaves, and tangy tomato sauce."
        image={"/public/pizzas/brie_carre.webp"}
      />
      <Pizza
        name="Four Cheese (Quattro Formaggi)"
        description="A cheese lover’s dream—mozzarella, parmesan, gorgonzola, and ricotta melted perfectly."
        image={"/public/pizzas/calabrese.webp"}
      />
      <Pizza
        name="Veggie Garden"
        description="A fresh mix of bell peppers, mushrooms, olives, tomatoes, onions, and sweetcorn."
        image={"/public/pizzas/ckn_pesto.webp"}
      /> */}
      <PizzaOfTheDay />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
