import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/UI/primary-button";
import Title from "../components/UI/title";
import colors from "../utils/colors";

const StartGameScreen = ({ onConfirmNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const inputChangeHandler = (inputText) => {
    setEnteredNumber(inputText);
  };

  const resetInputHndler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number must be a number between 0 and 100",
        [{ text: "OK", style: "destructive", onPress: resetInputHndler }]
      );
      return;
    }
    onConfirmNumber(chosenNumber);
  };
  return (
    <View style={styles.rootConatiner}>
      <Title>Guess my number</Title>

      <View style={styles.inputContainer}>
        <Text style={styles.hintText}>Enter your number below</Text>
        <TextInput
          value={enteredNumber}
          onChangeText={inputChangeHandler}
          maxLength={2}
          keyboardType="numeric"
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInputHndler}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootConatiner: {
    marginTop: 20,
    padding: 16,
  },
  hintText: {
    color: colors.accent500,
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    padding: 16,
    marginTop: 50,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    width: 50,
    marginVertical: 10,
    color: colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
