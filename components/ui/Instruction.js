import { StyleSheet, Text } from "react-native";

import colors from "../../utils/colors";

function Instruction({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "outfit-regular",
    color: colors.accent500,
    fontSize: 24,
  },
});

export default Instruction;
