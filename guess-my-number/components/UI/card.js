import { StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";

const Card = ({ children, text }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.hintText}>{text}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
  hintText: {
    color: colors.accent500,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Card;
