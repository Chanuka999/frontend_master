import Pizza from "./Pizza";

const Order = () => {
  const pizzaType = "papperoni";
  const pizzaSize = "M";
  return (
    <div className="order">
      <h2>Create order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">pizza Type</label>
            <select name="pizza-type" value={pizzaType}>
              <option value="papperoni">The papperoni pizza</option>
              <option value="bbq">The BBQ Chicken pizza</option>
              <option value="margherita">The Margherita pizza</option>
              <option value="veggie">The Veggie Garden pizza</option>
            </select>
          </div>

          <div>
            <label htmlFor="pizza-size">Pizza size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "s"}
                  type="radio"
                  name="pizza-size"
                  value="s"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-s">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        <div className="order-pizzas">
          <Pizza
            name="pepperoni"
            description="another pep pizza"
            image="/public/pizzas/pepperoni.webp"
          />
          <p>$13.37</p>
        </div>
      </form>
    </div>
  );
};

export default Order;
