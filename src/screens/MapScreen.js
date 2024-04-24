import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MapScreen = () => {
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
    {
      id: 11,
      latitude: 10.7768,
      longitude: 106.7034,
      title: "Saigon Zoo and Botanical Gardens",
      description: "Oldest zoo in Vietnam with diverse wildlife.",
    },
    {
      id: 12,
      latitude: 10.7816,
      longitude: 106.6982,
      title: "Saigon Skydeck",
      description: "Observation deck with stunning city views.",
    },
    {
      id: 13,
      latitude: 10.7749,
      longitude: 106.6991,
      title: "Municipal Theatre of Ho Chi Minh City",
      description: "Historic French colonial-style theater.",
    },
    {
      id: 14,
      latitude: 10.7761,
      longitude: 106.7053,
      title: "Saigon River",
      description: "Iconic river flowing through the city.",
    },
    {
      id: 15,
      latitude: 10.7842,
      longitude: 106.6988,
      title: "Saigon Square",
      description: "Popular shopping destination for locals and tourists.",
    },
    {
      id: 16,
      latitude: 10.7738,
      longitude: 106.6985,
      title: "Ho Chi Minh City Museum",
      description: "Museum showcasing the city's history and culture.",
    },
    {
      id: 17,
      latitude: 10.7625,
      longitude: 106.6822,
      title: "Pham Ngu Lao Street",
      description: "Vibrant area known for its nightlife and backpacker scene.",
    },
    {
      id: 18,
      latitude: 10.7696,
      longitude: 106.6936,
      title: "Binh Tay Market",
      description: "Busy market with a wide range of goods.",
    },
    {
      id: 19,
      latitude: 10.7697,
      longitude: 106.6923,
      title: "Thien Hau Temple",
      description: "Chinese temple dedicated to the sea goddess Mazu.",
    },
    {
      id: 20,
      latitude: 10.7805,
      longitude: 106.6985,
      title: "Ho Chi Minh City Hall",
      description: "Grand colonial-era building housing the city's government.",
    },
    {
      id: 21,
      latitude: 10.7691,
      longitude: 106.6866,
      title: "Saigon Opera House",
      description: "French colonial opera house with regular performances.",
    },
    {
      id: 22,
      latitude: 10.7733,
      longitude: 106.7008,
      title: "Fine Arts Museum",
      description: "Museum showcasing Vietnamese art from various periods.",
    },
    {
      id: 23,
      latitude: 10.7874,
      longitude: 106.7014,
      title: "Saigon Square Shopping Mall",
      description: "Modern mall with a wide range of shops and dining options.",
    },
    {
      id: 24,
      latitude: 10.7764,
      longitude: 106.7001,
      title: "Ben Thanh Night Market",
      description: "Night market offering local street food and souvenirs.",
    },
    {
      id: 25,
      latitude: 10.776,
      longitude: 106.7009,
      title: "Saigon Central Post Office",
      description:
        "Iconic post office with colonial architecture and souvenir shops.",
    },
    {
      id: 26,
      latitude: 10.7806,
      longitude: 106.6987,
      title: "Reunification Palace",
      description: "Historic government building with guided tours.",
    },
    {
      id: 27,
      latitude: 10.7787,
      longitude: 106.7001,
      title: "Ho Chi Minh City Museum of Fine Arts",
      description:
        "Art museum featuring Vietnamese and international artworks.",
    },
    {
      id: 28,
      latitude: 10.778,
      longitude: 106.6988,
      title: "Bitexco Financial Tower",
      description: "Iconic skyscraper with observation deck and sky bar.",
    },
    {
      id: 29,
      latitude: 10.7811,
      longitude: 106.6958,
      title: "Notre-Dame Cathedral Basilica of Saigon",
      description:
        "Neo-Romanesque Catholic cathedral built during French colonial rule.",
    },
    {
      id: 30,
      latitude: 10.7663,
      longitude: 106.6802,
      title: "Jade Emperor Pagoda",
      description: "Buddhist pagoda with ornate architecture and statues.",
    },
  ]);
  const navigate = useNavigation();
  return (
    <ImageBackground
      source={{
        uri: "https://th.bing.com/th/id/OIP.Gi2DiB0cXU9vVBGiAmUC0AHaEo?rs=1&pid=ImgDetMain",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate.push("Login")}>
          <Text style={styles.header}>Map</Text>
        </TouchableOpacity>
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

export default MapScreen;
