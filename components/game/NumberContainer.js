import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import colors from "../../utils/colors";

const deviceWidth = Dimensions.get("window").width;

function NumberContainer({ children }) {
  // const [width, height, scale, fontScale] = useWindowDimensions();

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
    // margin: 24,
    padding: deviceWidth < 400 ? 16 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "80%",
    width: 300,
  },
  numberText: {
    fontFamily: "outfit-bold",
    color: colors.accent500,
    fontSize: 36,
    // fontWeight: "bold",
  },
});

export default NumberContainer;
