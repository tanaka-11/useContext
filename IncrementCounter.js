// IncrementCounter.js
import React from "react";
import { useCounter } from "./CounterContext";
import { Button } from "react-native";

export default function IncrementCounter() {
  const { increment } = useCounter();

  return <Button onPress={increment} title="Incrementar" />;
}
