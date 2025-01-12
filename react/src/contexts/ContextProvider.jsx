import { createContext } from "react";

const StateContext = createContext({});

export const ContextProvider = () => {
  return <StateContext.Provider></StateContext.Provider>;
};
