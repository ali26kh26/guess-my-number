import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import StartGameScreen from "./pages/start-game-screen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./pages/game-screen";
import { useCallback, useEffect, useState } from "react";
import colors from "./utils/colors";
import GameOverScreen from "./pages/game-over-screen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setgameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const newGuessHandler = () => {
    setGuessRounds((prev) => prev + 1);
  };

  const startNewGameHandler = () => {
    setgameIsOver(false);
    setUserNumber();
    setGuessRounds(0);
  };

  const confirmNumberHandler = (confirmedNumber) => {
    setUserNumber(confirmedNumber);
  };

  const GameOverHandler = () => {
    setgameIsOver(true);
  };

  let screen = <StartGameScreen onConfirmNumber={confirmNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={GameOverHandler}
        onGeneratGuess={newGuessHandler}
      />
    );
  }
  if (gameIsOver) {
    screen = (
      <GameOverScreen
        guessRounds={guessRounds}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[colors.primary900, colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.2 }}
        source={require("./assets/images/background.png")}
      >
        <SafeAreaView
          onLayout={onLayoutRootView}
          style={[styles.rootScreen, styles.safeArea]}
        >
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  safeArea: {
    marginTop: StatusBar.currentHeight,
  },
});
