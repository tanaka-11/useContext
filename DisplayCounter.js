// DisplayCounter.js
import React from "react";
import { useCounter } from "./CounterContext";
import { Text } from "react-native";
export default function DisplayCounter() {
  const { count } = useCounter();

  return <Text>Contagem: {count}</Text>;
}
