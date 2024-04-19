import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, Animated } from "react-native";
import logo from "../assets/logo.png";
import sight from "../assets/sight.png";

function MyComponent({ navigation }) {
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    const fillProgress = () => {
      Animated.timing(progress, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false,
      }).start(() => {});
    };

    fillProgress();

    // Clean up
    return () => {
      progress.stopAnimation();
    };
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" source={logo} style={styles.image1} />
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 50],
                outputRange: ["0%", "25%"],
              }),
            },
          ]}
        />
      </View>
      <Image resizeMode="contain" source={sight} style={styles.image2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  image1: {
    marginTop: "30%",
    width: "30%",
    height: "40%",
    aspectRatio: 0.9,
  },
  image2: {
    width: "5%",
    height: "15%",
    aspectRatio: 1,
  },
  progressBar: {
    position: "absolute",
    bottom: "25%",
    left: "25%",
    width: "10%",
    height: 10,
    backgroundColor: "lightblue",
  },
});

export default MyComponent;
