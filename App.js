import { StyleSheet, Text, View } from "react-native";

import DisplayCounter from "./DisplayCounter";
import IncrementCounter from "./IncrementCounter";
import { CounterProvider } from "./CounterContext";

export default function App() {
  return (
    <>
      <CounterProvider>
        <DisplayCounter />
        <IncrementCounter />
      </CounterProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
