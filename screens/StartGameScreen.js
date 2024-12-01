import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import colors from "../utils/colors";
import Instruction from "../components/ui/Instruction";

function StartGameScreen({ setScreen, userNumber, setUserNumber }) {
  function handleConfirm() {
    const chosenNumber = parseInt(userNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Input has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: handleReset,
          },
        ]
      );
      return;
    }

    setScreen("game");
  }

  function handleReset() {
    setUserNumber("");
  }

  return (
    <View style={styles.screen}>
      <Title>Guessing Game</Title>
      <Card>
        <Instruction>Enter a Number</Instruction>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={userNumber}
          onChangeText={(value) => setUserNumber(value)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 36,
    padding: 24,
    alignItems: "center",
  },
  numberInput: {
    // height: 50,
    width: 100,
    textAlign: "center",
    fontFamily: "outfit-bold",
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent500,
    color: colors.accent500,
    marginVertical: 8,
    // fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
