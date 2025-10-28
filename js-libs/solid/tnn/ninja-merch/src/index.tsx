/* @refresh reload */
import { render } from "solid-js/web";
import "solid-devtools";

import "normalize.css";
import "./index.css";
import App from "./components/App/";
import { CartContextProvider } from "./context/CartContext";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(() => (
  <CartContextProvider>
    <App />
  </CartContextProvider>
), root!);
