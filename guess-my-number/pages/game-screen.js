import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import Card from "../components/UI/card";
import GuessNumber from "../components/game/guess-number";
import PrimaryButton from "../components/UI/primary-button";
import Title from "../components/UI/title";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../utils/colors";

let minNumber = 1;
let maxNumber = 100;

const GameScreen = ({ userNumber, onGameOver, onGeneratGuess }) => {
  const [phoneGuess, setphoneGuess] = useState(
    generateRandomBetween(1, 100, userNumber)
  );
  const [guessList, setGuessList] = useState([]);

  useEffect(() => {
    if (phoneGuess === userNumber) {
      onGameOver();
      minNumber = 1;
      maxNumber = 100;
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
    const newRandomNumber = generateRandomBetween(
      minNumber,
      maxNumber,
      phoneGuess
    );
    setGuessList((prev) => [phoneGuess, ...prev]);
    setphoneGuess(newRandomNumber);
    onGeneratGuess();
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
      {guessList.length > 0 && (
        <FlatList
          data={guessList}
          renderItem={({ item }) => {
            return <GuessNumber>{item}</GuessNumber>;
          }}
          keyExtractor={(item) => item}
          style={styles.guessList}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 16,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    flex: 1,
  },
  guessList: {
    paddingVertical: 10,
    backgroundColor: colors.primary800,
    marginVertical: 10,
    borderRadius: 8,
  },
});
export default GameScreen;
