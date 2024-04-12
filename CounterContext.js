// CounterContext.js
import React, { createContext, useContext, useState } from "react";

// Criar o contexto
const CounterContext = createContext();

// Hook customizado para acessar o contexto
export const useCounter = () => useContext(CounterContext);

// Provedor do contexto
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Valor do contexto
  const value = {
    count,
    increment,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
