import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import ImageCarousel from "../components/ImageCarousel";
import ExploreSuggest from "../components/ExploreSuggest";
const Explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hi Sumantra,</Text>
      <Text style={styles.greeting}>Where do you wanna go?</Text>
      <ImageCarousel />
      <ExploreSuggest />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  userName: {
    fontSize: 18,
    marginTop: 40,
    color: "#39414B",
  },
  greeting: {
    fontSize: 32,
    fontWeight: "bold",
    width: 200,
    color: "#0A2753",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bannerLocation: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Explore;
