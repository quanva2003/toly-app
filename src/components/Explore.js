import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import PropTypes from "prop-types";

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

const images = [
  "https://gonatour.vn/vnt_upload/news/09_2020/khu_du_lich_suoi_tien.jpg",
  "https://dulich3mien.vn/wp-content/uploads/2022/03/HON-SEN-KHO-02-min.jpg",
  "https://owa.bestprice.vn/images/destinations/uploads/nha-tho-duc-ba-54374b6d33363.png",
  "https://th.bing.com/th/id/R.6a1b4c8f4ee4357ac59ccf514fa2349b?rik=hWtiRUHmie7oRw&pid=ImgRaw&r=0",
  "https://dulich3mien.vn/wp-content/uploads/2021/12/hinh-anh-cho-ben-thanh.jpg",
];

const CarouselItem = ({ item }) => (
  <Image source={{ uri: item }} style={styles.image} />
);

CarouselItem.propTypes = {
  item: PropTypes.string.isRequired,
};

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi Sumantra,</Text>
      <Text style={styles.greeting}>Where do you wanna go?</Text>
      <Carousel
        data={images}
        renderItem={({ item }) => <CarouselItem item={item} />}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        loop
        autoplay
        autoplayInterval={1500}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
      <Text style={styles.bannerLocation}>Suối Tiên, Hồ Chí Minh city</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
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
