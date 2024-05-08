import React from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ExploreDetail = ({ route }) => {
  const { location } = route.params;
  const navigation = useNavigation();

  // ref for bottom sheet
  const bottomSheetRef = React.useRef(null);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={["100%", "50%"]}
        >
          <View style={styles.container}>
            <Text style={styles.name}>{location.name}</Text>
            <Text style={styles.location}>{location.location}</Text>
            <Text style={styles.rating}>Rating: {location.rating}</Text>
            <Text style={styles.features}>
              Features: {location.features.join(", ")}
            </Text>
          </View>
        </BottomSheet>
      </ImageBackground>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // padding: 20,
    height: "50%",
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
