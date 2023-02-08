import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreen from "./pages/start-game-screen";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient colors={["#33031b", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.2 }}
        source={require("./assets/images/background.png")}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
