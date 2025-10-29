import { createSignal, type Component } from "solid-js";
import { Route, Router } from "@solidjs/router";

import "./App.module.css";
import banner from "../../assets/bg_banner.jpg";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import Product from "../../pages/Product";
import { useCartContext } from "../../context/CartContext";

const App: Component = () => {
  const [darkTheme, setDarkTheme] = createSignal<boolean>(false);
  const context = useCartContext();

  if (!context) {
    throw new Error("useContext must be used within a CartContextProvider");
  }

  const { items } = context;

  const quantity = () => {
    return items.reduce((acc, current) => {
      return acc + current.quantity;
    }, 0);
  };

  const handleToggleTheme = () => {
    setDarkTheme(!darkTheme());
  };

  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{
          "bg-neutral-900": darkTheme(),
          " text-white": darkTheme(),
        }}
      >
        <span
          class="material-symbols-outlined cursor-pointer"
          onClick={handleToggleTheme}
        >
          light_mode
        </span>

        <h1>Ninja Merch</h1>

        <a href="/">Home</a>
        <a href="/cart">Cart ({ quantity() })</a>
      </header>

      <figure class="rounded-md">
        <img src={banner} alt="site banner" />
      </figure>

      <Router>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Router>
    </div>
  );
};

export default App;
