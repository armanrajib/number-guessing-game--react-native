import { StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    margin: 24,
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "outfit-bold",
    color: colors.accent500,
    fontSize: 36,
    // fontWeight: "bold",
  },
});

export default NumberContainer;
