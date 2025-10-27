import { createContext, useContext } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface CartContextValue {
  items: CartItem[];
  setItems: SetStoreFunction<CartItem[]>;
}

export const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartContextProviderProps {
  children: any;
}

export function CartContextProvider(props: CartContextProviderProps) {
  const [items, setItems] = createStore<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}

