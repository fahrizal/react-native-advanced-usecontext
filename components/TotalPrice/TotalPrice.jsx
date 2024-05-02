import { Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";

export function TotalPrice() {
  const { books, currency, setCurrency } = useContext(BookContext);
  const totalPrice = books.reduce((acc, currentBook) => {
    return currentBook.price + acc;
  }, 0);

  return (
    <>
      <Text style={{ marginTop: 20 }}>
        Total Price: {totalPrice} {currency}
      </Text>
      <TouchableOpacity
        style={{ marginTop: 30, backgroundColor: "lightblue" }}
        onPress={() => setCurrency(currency === "$" ? "RM" : "$")}
      >
        <Text>Change currency</Text>
      </TouchableOpacity>
    </>
  );
}
