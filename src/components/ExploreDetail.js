import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const ExploreDetail = ({ route }) => {
  const { location } = route.params;
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: location.uri }}
      style={styles.backgroundImage}
    >
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" type="ionicon" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.name}>{location.name}</Text>
        <Text style={styles.location}>{location.location}</Text>
        <Text style={styles.rating}>Rating: {location.rating}</Text>
        <Text style={styles.features}>
          Features: {location.features.join(", ")}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    padding: 20,
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    marginBottom: 10,
  },
  features: {
    fontSize: 18,
  },
});

export default ExploreDetail;
