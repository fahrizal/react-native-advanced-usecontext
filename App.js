import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Component1 } from "./components/Component1/Component1";
import { BookContext } from "./contexts/BookContext";

export default function App() {
  const [currency, setCurrency] = useState("$");
  const [books, setBooks] = useState([
    { id: 1, title: "Lord of the rings", price: 9.99 },
    { id: 2, title: "Harry potter", price: 7.8 },
    { id: 3, title: "Fight Club", price: 6.5 },
  ]);

  return (
    <BookContext.Provider value={{ books, currency, setCurrency }}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <Component1 />
        </SafeAreaView>
      </SafeAreaProvider>
    </BookContext.Provider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: "center", alignItems: "center" },
});
