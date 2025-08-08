import { createContext, useState, type ReactNode } from "react";

interface IMyContextValue {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const MyContext = createContext<IMyContextValue | undefined>(undefined);

interface IMyProviderProps {
  children: ReactNode;
}

const MyProvider = ({children}: IMyProviderProps) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const value = {
    count,
    increment,
    decrement
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>
};

export default MyProvider;

