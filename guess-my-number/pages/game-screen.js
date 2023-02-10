import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Card from "../components/UI/card";
import GuessNumber from "../components/UI/game/guess-number";
import PrimaryButton from "../components/UI/primary-button";
import Title from "../components/UI/title";
import Ionicons from "@expo/vector-icons/Ionicons";

let minNumber = 1;
let maxNumber = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const [phoneGuess, setphoneGuess] = useState(
    generateRandomBetween(1, 100, userNumber)
  );

  useEffect(() => {
    if (phoneGuess === userNumber) {
      onGameOver();
    }
  }, [phoneGuess, userNumber, onGameOver]);

  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  const nextGuessGenerator = (direction) => {
    if (
      (direction === "lower" && phoneGuess < userNumber) ||
      (direction === "greater" && phoneGuess > userNumber)
    ) {
      Alert.alert("Dont Lie!!", "you know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber = phoneGuess;
    } else if (direction === "greater") {
      minNumber = phoneGuess;
    }
    setphoneGuess(generateRandomBetween(minNumber, maxNumber, phoneGuess));
  };

  return (
    <View style={styles.container}>
      <Title>Opponent Guess</Title>
      <GuessNumber>{phoneGuess}</GuessNumber>
      <Card text="lower or higher ?">
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessGenerator("lower")}>
              <Ionicons name="md-remove" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessGenerator("greater")}>
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    flex: 1,
  },
});
export default GameScreen;
