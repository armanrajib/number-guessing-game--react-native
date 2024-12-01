import { Pressable, StyleSheet, Text, View } from "react-native";

import colors from "../../utils/colors";

function PrimaryButton({ onPress, children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 50,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    fontFamily: "outfit-regular",
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
