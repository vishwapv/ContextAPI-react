import { React, createContext } from "react";
export const WareHouse = createContext();
const Context = ({ children }) => {
  const bags = "pens";
  const books = "books";
  // to pass this variable we have define the value in create context
  return (
    <WareHouse.Provider value={{ books, bags }}>{children}</WareHouse.Provider>
  );
};

export default Context;
