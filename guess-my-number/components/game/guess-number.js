import { StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";

const GuessNumber = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    borderWidth: 4,
    borderColor: colors.accent500,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: colors.accent500,
    letterSpacing: 2,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});

export default GuessNumber;
