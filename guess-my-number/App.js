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
import { useEffect, useState } from "react";
import colors from "./utils/colors";
import GameOverScreen from "./pages/game-over-screen";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setgameIsOver] = useState(false);
  const confirmNumberHandler = (confirmedNumber) => {
    setUserNumber(confirmedNumber);
  };

  const GameOverHandler = () => {
    setgameIsOver(true);
  };

  let screen = <StartGameScreen onConfirmNumber={confirmNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={GameOverHandler} />
    );
  }
  if (gameIsOver) {
    screen = <GameOverScreen />;
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
        <SafeAreaView style={[styles.rootScreen, styles.safeArea]}>
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
