const pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "pizza hut orders"),
    React.createElement(pizza, {
      name: "Pepperoni Feast",
      description:
        "Loaded with spicy pepperoni slices on top of a rich mozzarella and tomato base.",
    }),
    React.createElement(pizza, {
      name: "BBQ Chicken Deluxe",
      description:
        "Smoky BBQ sauce with grilled chicken, red onions, and cilantro for a sweet & savory flavor.",
    }),
    React.createElement(pizza, {
      name: "Margherita",
      description:
        "A classic Italian pizza topped with fresh mozzarella, basil leaves, and tangy tomato sauce.",
    }),
    React.createElement(pizza, {
      name: "Four Cheese (Quattro Formaggi)",
      description:
        "A cheese lover’s dream—mozzarella, parmesan, gorgonzola, and ricotta melted perfectly.",
    }),
    React.createElement(pizza, {
      name: "Veggie Garden",
      description:
        "A fresh mix of bell peppers, mushrooms, olives, tomatoes, onions, and sweetcorn.",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
