import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
const locations = [
  {
    name: "Suối Tiên",
    rating: 4.5,
    location: "Thủ Đức, Tp Hồ Chí Minh",
    features: ["mountain"],
    uri: "https://gonatour.vn/vnt_upload/news/09_2020/khu_du_lich_suoi_tien.jpg",
  },
  {
    name: "Đầm Sen",
    rating: 2.5,
    features: ["beach", "lake", "mountain"],
    location: "Quận 11, Tp Hồ Chí Minh",
    uri: "https://dulich3mien.vn/wp-content/uploads/2022/03/HON-SEN-KHO-02-min.jpg",
  },
  {
    name: "Nhà thờ Đức Bà",
    rating: 3.5,
    features: ["mountain"],
    location: "Quận 1, Tp Hồ Chí Minh",
    uri: "https://owa.bestprice.vn/images/destinations/uploads/nha-tho-duc-ba-54374b6d33363.png",
  },
  {
    name: "Phố đi bộ Nguyễn Huệ",
    rating: 4.9,
    location: "Quận 1, Tp Hồ Chí Minh",
    features: ["lake"],
    uri: "https://toplist.vn/images/800px/pho-di-bo-nguyen-hue-990635.jpg",
  },
  {
    name: "Chợ Bến Thành",
    rating: 3.7,
    features: ["beach", "mountain"],
    location: "Quận 1, Tp Hồ Chí Minh",
    uri: "https://dulich3mien.vn/wp-content/uploads/2021/12/hinh-anh-cho-ben-thanh.jpg",
  },
];
import { useNavigation } from "@react-navigation/native";
const LocationCard = ({ name, rating, district, uri, location }) => {
  const shortName = name.length > 10 ? name.substring(0, 10) + "..." : name;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Details", { location })}
    >
      <TouchableOpacity style={styles.heartIconContainer}>
        <Icon name="heart" type="font-awesome" color="#FFFFFF" size={12} />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={{ uri: uri }} style={styles.image} />
      </View>

      <View style={styles.info}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.name}>{shortName}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" type="Ionicons" color="#FF5733" size={16} />
            <Text style={styles.rating}>{rating}</Text>
          </View>
        </View>
        <View style={styles.locationContainer}>
          <Icon
            name="location-on"
            type="MaterialIcons"
            color="#FF5733"
            size={12}
          />
          <Text style={styles.district}>{district}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const ExploreSuggest = () => {
  const [ratingFiltered, setRatingFiltered] = useState(false);
  const [featureFiltered, setFeatureFiltered] = useState(false);
  const navigation = useNavigation();
  const getFilteredLocations = () => {
    let newLocations = locations;

    if (ratingFiltered) {
      newLocations = newLocations.filter((location) => location.rating > 4);
    }

    if (featureFiltered) {
      const selectedFeatures = Object.keys(featureFiltered).filter(
        (feature) => featureFiltered[feature]
      );
      if (selectedFeatures.length > 0) {
        newLocations = newLocations.filter((location) =>
          selectedFeatures.every((feature) =>
            location.features.includes(feature)
          )
        );
      }
    }

    return newLocations;
  };

  const filterByRating = () => {
    setRatingFiltered((prevRatingFiltered) => !prevRatingFiltered);
  };

  const filterByFeature = (feature) => {
    setFeatureFiltered((prevFeatureFiltered) => ({
      ...prevFeatureFiltered,
      [feature]: !prevFeatureFiltered[feature],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={ratingFiltered ? styles.buttonOn : styles.buttonOff}
          onPress={filterByRating}
        >
          <Icon
            color={ratingFiltered ? "#ffffff" : "#6A778B"}
            type="materialIcons"
            name="local-fire-department"
          />
          <Text style={ratingFiltered ? styles.textOn : styles.textOff}>
            Popular
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={featureFiltered.lake ? styles.buttonOn : styles.buttonOff}
          onPress={() => filterByFeature("lake")}
        >
          <Icon
            color={featureFiltered.lake ? "#ffffff" : "#6A778B"}
            type="materialcommunityicons"
            name="waves"
          />
          <Text style={featureFiltered.lake ? styles.textOn : styles.textOff}>
            Lake
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={featureFiltered.beach ? styles.buttonOn : styles.buttonOff}
          onPress={() => filterByFeature("beach")}
        >
          <Icon
            color={featureFiltered.beach ? "#ffffff" : "#6A778B"}
            type="MaterialIcons"
            name="beach-access"
          />
          <Text style={featureFiltered.beach ? styles.textOn : styles.textOff}>
            Beach
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={featureFiltered.mountain ? styles.buttonOn : styles.buttonOff}
          onPress={() => filterByFeature("mountain")}
        >
          <Icon
            color={featureFiltered.mountain ? "#ffffff" : "#6A778B"}
            type="foundation"
            name="mountains"
          />
          <Text
            style={featureFiltered.mountain ? styles.textOn : styles.textOff}
          >
            Mountain
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal={true}
        data={getFilteredLocations()}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <LocationCard
            name={item.name}
            rating={item.rating}
            district={item.location}
            uri={item.uri}
            navigation={navigation}
            location={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  card: {
    padding: 10,
    height: 190,
    width: 200,

    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#EDEEEF",
  },
  heartIconContainer: {
    position: "absolute",
    top: 12,
    right: 10,
    backgroundColor: "#6A778B",
    padding: 5,
    zIndex: 1,
    borderRadius: 50,
  },

  imageContainer: {
    width: 180,
    height: 110,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },

  info: {
    // padding: 10,
    marginTop: 15,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 3,
  },
  district: {
    fontSize: 12,
  },
  buttonOn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF5733",
    padding: 5,
    borderWidth: 1,
    borderColor: "#E52900",
    borderRadius: 5,
  },
  buttonOff: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 5,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 5,
  },
  textOn: {
    color: "#ffffff",
  },
  textOff: {
    color: "#6A778B",
  },
});

export default ExploreSuggest;
