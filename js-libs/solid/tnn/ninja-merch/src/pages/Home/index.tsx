import { createResource, For, Show } from "solid-js";
import { A } from "@solidjs/router";

import Card from "../../components/Card";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:4000/products/");

  return res.json();
};

const Home = () => {
  const [products] = createResource(fetchProducts);

  return (
    <Show when={products()} fallback={<p>Loading...</p>}>
      <div class="grid grid-cols-4 gap-10 my-4">
        <For each={products()}>
          {(product) => (
            <Card rounded={true} flat={false}>
              <img src={product.image} alt={product.title} />
              <h2 class="my-3 font-bold">{product.title}</h2>
              <p>{product.description}</p>
              <A href={`/product/${product.id}`} class="btn">
                View
              </A>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
};

export default Home;
