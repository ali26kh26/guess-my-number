import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import GuessNumber from "../components/UI/game/guess-number";
import PrimaryButton from "../components/UI/primary-button";
import Title from "../components/UI/title";

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
      <View>
        <Text>lower or higher ?</Text>
        <PrimaryButton onPress={() => nextGuessGenerator("lower")}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={() => nextGuessGenerator("greater")}>
          +
        </PrimaryButton>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 16,
  },
});
export default GameScreen;
