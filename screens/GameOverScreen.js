import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Title from "../components/ui/Title";
import colors from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const deviceWidth = Dimensions.get("window").width;

function GameOverScreen({ userNumber, numRounds, onStartNewGame }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/success.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{numRounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    padding: 24,
    marginTop: 36,
  },
  imageContainer: {
    width: deviceWidth < 400 ? 200 : 300,
    height: deviceWidth < 400 ? 200 : 300,
    borderRadius: deviceWidth < 400 ? 100 : 150,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 12,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "outfit-regular",
    fontSize: 24,
    textAlign: "center",
  },
  highlight: {
    color: colors.primary500,
    fontFamily: "outfit-bold",
  },
});

export default GameOverScreen;
