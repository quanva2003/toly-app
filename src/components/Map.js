import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const Map = () => {
  const [markerList, setMarkerList] = useState([
    {
      id: 1,
      latitude: 10.7769,
      longitude: 106.7009,
      title: "Ben Thanh Market",
      description: "Famous market for local goods and souvenirs.",
    },
    {
      id: 2,
      latitude: 10.7761,
      longitude: 106.6961,
      title: "Saigon Notre-Dame Basilica",
      description: "Historic French colonial cathedral.",
    },
    {
      id: 3,
      latitude: 10.7769,
      longitude: 106.7026,
      title: "Independence Palace",
      description: "Historic government building and museum.",
    },
    {
      id: 4,
      latitude: 10.7777,
      longitude: 106.7016,
      title: "War Remnants Museum",
      description: "Museum with exhibits related to the Vietnam War.",
    },
    {
      id: 5,
      latitude: 10.7763,
      longitude: 106.7032,
      title: "Saigon Central Post Office",
      description: "Historic post office with Gothic architecture.",
    },
    {
      id: 6,
      latitude: 10.7796,
      longitude: 106.7053,
      title: "Bitexco Financial Tower",
      description: "Iconic skyscraper offering panoramic views.",
    },
    {
      id: 7,
      latitude: 10.7745,
      longitude: 106.6992,
      title: "Ho Chi Minh City Museum of Fine Arts",
      description: "Art museum with Vietnamese and foreign works.",
    },
    {
      id: 8,
      latitude: 10.7775,
      longitude: 106.7007,
      title: "Mariamman Hindu Temple",
      description: "Colorful Hindu temple with ornate architecture.",
    },
    {
      id: 9,
      latitude: 10.7734,
      longitude: 106.7009,
      title: "Saigon Opera House",
      description: "Elegant French colonial-style opera house.",
    },
    {
      id: 10,
      latitude: 10.7763,
      longitude: 106.7075,
      title: "Tao Dan Park",
      description: "Large park with greenery and recreational areas.",
    },
  ]);
  return (
    <ImageBackground
      source={{
        uri: "https://th.bing.com/th/id/OIP.Gi2DiB0cXU9vVBGiAmUC0AHaEo?rs=1&pid=ImgDetMain",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Map</Text>
        <View style={styles.mapContainer}>
          <MapView
            // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 10.7797,
              longitude: 106.6992,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            {markerList.map((marker) => {
              return (
                <Marker
                  draggable
                  key={marker.id}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                  title={marker.title}
                  description={marker.description}
                />
              );
            })}
          </MapView>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Add background color with opacity
  },
  header: {
    fontSize: 28,
    color: "#243666",
    marginBottom: 5,
    fontWeight: "bold",
  },
  mapContainer: {
    height: 600,
    width: 350,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
