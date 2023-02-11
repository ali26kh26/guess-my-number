import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/UI/primary-button";
import Title from "../components/UI/title";
import colors from "../utils/colors";

const GameOverScreen = ({ guessRounds, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={{ width: "100%" }}>
        <Title>Game Over</Title>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summary}>
          your phone needed <Text style={styles.highlight}>{guessRounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>{" "}
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    padding: 16,
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: colors.primary900,
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontFamily: "open-sans",
    fontSize: 21,
    marginBottom: 20,
  },
  highlight: {
    color: colors.primary900,
  },
});

export default GameOverScreen;
