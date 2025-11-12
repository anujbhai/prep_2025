import { For } from "solid-js";

import Card from "../../components/Card";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const context = useCartContext();

  if (!context) {
    throw new Error("useContext must be used within a CartContextProvider");
  }

  const { items, setItems } = context;

  const increase = (id: number) => {
    setItems((p) => p.id === id, "quantity", (q: number) => q + 1);
  };

  const decrease = (id: number) => {
    const found = items.find((p) => p.id === id);
    if (!found) return;
    if (found.quantity <= 1) {
      setItems(items.filter((p) => p.id !== id));
      return;
    }
    setItems((p) => p.id === id, "quantity", (q: number) => q - 1);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((p) => p.id !== id));
  };

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
            <div class="my-3 flex items-center justify-between">
              <div class="flex items-center gap-3">
              <span>
                  {item.title} - ${item.price}
                </span>
              </div>

              <div class="flex items-center gap-3">
                <button class="btn cursor-pointer" onClick={[decrease, item.id]}>-</button>
                  <span class="min-w-8 text-center">{item.quantity}</span>
                <button class="btn cursor-pointer" onClick={[increase, item.id]}>+</button>

                <button class="cursor-pointer" onClick={[removeItem, item.id]} aria-label="Remove item">
                  <span class="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          )}
        </For>

        <p class="mt-8 pt-4 border-t-2 font-bold">Grand total: ${ total().toFixed(2) }</p>
      </Card>
    </div>
  );
};

export default Cart;
