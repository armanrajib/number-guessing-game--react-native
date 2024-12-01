import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import colors from "./utils/colors";

function App() {
  const [screen, setScreen] = useState("startGame");
  const [userNumber, setUserNumber] = useState("");
  const [guessRounds, setGuessRounds] = useState([]);

  const [fontsLoaded] = useFonts({
    "outfit-regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
  });

  function handleStartNewGame() {
    setScreen("startGame");
    setUserNumber("");
    setGuessRounds([]);
  }

  if (!fontsLoaded) <AppLoading />;

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[colors.primary700, colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen === "startGame" && (
              <StartGameScreen
                setScreen={setScreen}
                userNumber={userNumber}
                setUserNumber={setUserNumber}
              />
            )}
            {screen === "game" && (
              <GameScreen
                setScreen={setScreen}
                userNumber={userNumber}
                guessRounds={guessRounds}
                setGuessRounds={setGuessRounds}
              />
            )}
            {screen === "gameOver" && (
              <GameOverScreen
                userNumber={userNumber}
                numRounds={guessRounds.length}
                onStartNewGame={handleStartNewGame}
              />
            )}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
