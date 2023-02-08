import { StyleSheet, Text } from "react-native";

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
    borderColor: "#ddb52f",
    padding: 12,
    color: "#ddb52f",
    textAlign: "center",
  },
});

export default Title;
