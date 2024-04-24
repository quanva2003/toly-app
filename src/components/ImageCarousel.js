import React, { useState } from "react";
import { Svg, Defs, Rect, LinearGradient, Stop } from "react-native-svg";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const PAGE_WIDTH = Dimensions.get("window").width;

const images = [
  {
    uri: "https://gonatour.vn/vnt_upload/news/09_2020/khu_du_lich_suoi_tien.jpg",
    name: "Suối Tiên ",
    location: "Thủ Đức, Tp Hồ Chí Minh",
  },
  {
    uri: "https://dulich3mien.vn/wp-content/uploads/2022/03/HON-SEN-KHO-02-min.jpg",
    name: "Đầm Sen",
    location: "Quận 11, Tp Hồ Chí Minh",
  },
  {
    uri: "https://owa.bestprice.vn/images/destinations/uploads/nha-tho-duc-ba-54374b6d33363.png",
    name: "Nhà thờ Đức Bà",
    location: "Quận 1, Tp Hồ Chí Minh",
  },
  {
    uri: "https://toplist.vn/images/800px/pho-di-bo-nguyen-hue-990635.jpg",
    name: "Phố đi bộ Nguyễn Huệ",
    location: "Quận 1, Tp Hồ Chí Minh",
  },
  {
    uri: "https://dulich3mien.vn/wp-content/uploads/2021/12/hinh-anh-cho-ben-thanh.jpg",
    name: "Chợ Bến Thành",
    location: "Quận 1, Tp Hồ Chí Minh",
  },
];

const ImageCarousel = () => {
  const [mode, setMode] = useState("horizontal-stack");
  const [snapDirection, setSnapDirection] = useState("left");
  const viewCount = 5;

  const renderItem = ({ item }) => (
    <ImageBackground source={{ uri: item.uri }} style={styles.imageStyle}>
      <Svg height="100%" width="100%">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="transparent" stopOpacity="0" />
            <Stop offset="0.5" stopColor="transparent" stopOpacity="0" />
            <Stop offset="1" stopColor="black" stopOpacity="0.5" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.textStyleName}>{item.name}</Text>
        <Text style={styles.textStyleLocation}>{item.location}</Text>
      </View>
    </ImageBackground>
  );

  return (
    <View style={{}}>
      <Carousel
        style={{
          width: "100%",
        }}
        width={PAGE_WIDTH * 0.86}
        height={PAGE_WIDTH * 0.9}
        pagingEnabled={true}
        snapEnabled={false}
        mode={"vertical-stack"}
        loop={true}
        autoPlay={true}
        autoPlayReverse={false}
        data={images}
        modeConfig={{
          snapDirection,
          stackInterval: mode === "vertical-stack" ? 8 : 18,
        }}
        customConfig={() => ({ type: "positive", viewCount })}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    width: PAGE_WIDTH * 0.9,
    height: PAGE_WIDTH * 0.6,
    borderRadius: 10,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  textStyleName: {
    color: "#ffffff",
    fontSize: 18,
  },
  textStyleLocation: {
    color: "#ffffff",
    fontSize: 12,
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
});
export default ImageCarousel;
