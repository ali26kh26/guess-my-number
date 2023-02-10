import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/title";
import colors from "../utils/colors";

const GameOverScreen = () => {
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
});

export default GameOverScreen;
