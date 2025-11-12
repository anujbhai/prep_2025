import { useParams } from "@solidjs/router";
import { createResource, createSignal, Show } from "solid-js";

import { CartItem, useCartContext } from "../../context/CartContext";


const fetchProduct = async (id: string) => {
  const res = await fetch(`http://localhost:4000/products/${id}`);

  return res.json();
};

const Product = () => {
  const params = useParams();
  const [product] = createResource(params.id, fetchProduct);
  const context = useCartContext();

  if (!context) {
    throw new Error("useContext must be used within a CartContextProvider");
  }

  const { items, setItems } = context;

  const cartItem = () => items.find((p: CartItem) => p.id === product()?.id);

  const [adding, setAdding] = createSignal(false);

  const addProduct = () => {
    setAdding(true);
    setTimeout(() => setAdding(false), 2000);

    const exists = items.find((p: CartItem) => p.id === product().id);

    if (exists) {
      setItems(
        (p: CartItem) => p.id === product().id,
        "quantity",
        (q: number) => q + 1,
      );
    }

    if (!exists) {
      setItems([...items, { ...product(), quantity: 1 }]);
    }
  };

  const increase = () => {
    if (!product()) return;
    setItems((p: CartItem) => p.id === product().id, "quantity", (q: number) => q + 1);
  };

  const decrease = () => {
    if (!product()) return;
    const current = cartItem();
    if (!current) return;
    if (current.quantity <= 1) {
      setItems(items.filter((p: CartItem) => p.id !== current.id));
      return;
    }
    setItems(
      (p: CartItem) => p.id === product().id,
      "quantity",
      (q: number) => q - 1,
    );
  };

  return (
    <div class="my-7">
      <Show when={product()} fallback={<p>Loading...</p>}>
        <div class="grid grid-cols-5 gap-7">
          <div class="col-span-2">
            <img src={product().image} alt={product().title} />
          </div>

          <div class="col-span-3">
            <h2 class="text-3xl font-bold mb-7">{product().title}</h2>

            <p>{product().description}</p>

            <p class="my-7 text-2xl">Only ${product().price}</p>

            <Show when={cartItem()}>
              <div class="flex items-center gap-3 mt-3">
                <button class="btn cursor-pointer" onClick={decrease}>
                  -
                </button>
                <span class="min-w-8 text-center">
                  {cartItem()?.quantity}
                </span>
                <button class="btn cursor-pointer" onClick={increase}>
                  +
                </button>
              </div>
            </Show>

            <button
              class="btn cursor-pointer"
              onClick={addProduct}
              disabled={adding()}
            >
              Add to Cart
            </button>

            <Show when={adding()}>
              <div class="m-2 p-2 border-amber-500 border-2 rounded-md inline-block">
                {product().title} was added to the cart
              </div>
            </Show>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Product;
