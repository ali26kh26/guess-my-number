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
import { useState } from "react";
export default function App() {
  const [userNumber, setUserNumber] = useState();

  const confirmNumberHandler = (confirmedNumber) => {
    setUserNumber(confirmedNumber);
  };

  let screen = <StartGameScreen onConfirmNumber={confirmNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient colors={["#33031b", "#ddb52f"]} style={styles.rootScreen}>
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
