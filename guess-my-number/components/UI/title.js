import { StyleSheet, Text } from "react-native";
import colors from "../../utils/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    letterSpacing: 1,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "white",
    padding: 12,
    color: "white",
    textAlign: "center",
  },
});

export default Title;
