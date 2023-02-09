import { StyleSheet, Text } from "react-native";
import colors from "../utils/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: colors.accent500,
    padding: 12,
    color: colors.accent500,
    textAlign: "center",
  },
});

export default Title;
