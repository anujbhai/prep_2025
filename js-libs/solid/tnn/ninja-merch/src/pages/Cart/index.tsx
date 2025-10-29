import { For } from "solid-js";

import Card from "../../components/Card";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const context = useCartContext();

  if (!context) {
    throw new Error("useContext must be used within a CartContextProvider");
  }

  const { items } = context;

  const total = () => {
    return items.reduce((acc, p) => {
      return acc + p.price * p.quantity;
    }, 0);
  };

  return (
    <div class="max-w-md my-8 mx-auto">
      <Card flat={false} rounded={true}>
        <h2>Your Shopping Cart</h2>
        <For each={items}>
          {(item) => (
            <p class="my-3">
              {item.title} - ${item.price} x {item.quantity}
            </p>
          )}
        </For>

        <p class="mt-8 pt-4 border-t-2 font-bold">Grand total: ${ total() }</p>
      </Card>
    </div>
  );
};

export default Cart;
