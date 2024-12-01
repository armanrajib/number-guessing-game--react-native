import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  rndNum = Math.floor(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ setScreen, userNumber, guessRounds, setGuessRounds }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(
    function () {
      if (currentGuess === Number(userNumber)) {
        setScreen("gameOver");
        minBoundary = 1;
        maxBoundary = 100;
      }
    },
    [currentGuess, userNumber]
  );

  function handleNextGuess(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") maxBoundary = currentGuess;
    else if (direction === "higher") minBoundary = currentGuess + 1;

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRandomNumber);
    setGuessRounds((guessRounds) => [newRandomNumber, ...guessRounds]);
  }

  const guessRoundsCount = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instruction>Higher or Lower?</Instruction>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleNextGuess("lower")}>
              <AntDesign name="minus" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleNextGuess("higher")}>
              <AntDesign name="plus" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guess, index) => (
          <Text key={index}>{guess}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsCount - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 36,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
