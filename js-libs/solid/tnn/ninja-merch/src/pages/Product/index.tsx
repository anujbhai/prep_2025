import { useParams } from "@solidjs/router"
import { createResource, Show } from "solid-js"

import { CartItem, useCartContext } from "../../context/CartContext";

const fetchProduct = async (id: string) => {
  const res = await fetch(`http://localhost:4000/products/${id}`)

  return res.json();
}

const Product = () => {
  const params = useParams()
  const [product] = createResource(params.id, fetchProduct)
  const context = useCartContext()

  if (!context) {
    throw new Error("useContext must be used within a CartContextProvider");
  }

  const { items, setItems } = context

  const addProduct = () => {
    const exists = items.find((p: CartItem) => p.id === product().id)

    if (exists) {
      setItems((p: CartItem) => p.id === product().id, "quantity", (q: number) => q + 1)
    }

    if (!exists) {
      setItems([...items, {...product(), quantity: 1}])
    }
  }

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

            <button class="btn" onClick={addProduct}>Add to Cart</button>
          </div>
        </div>
      </Show>
    </div>
  )
}

export default Product

