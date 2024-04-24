import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  Switch,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
// import { QrcodeOutlined } from "@ant-design/icons-react-native";
import { Icon } from "react-native-elements";

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAds, setIsAds] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const toggleNotifications = () => {
    setIsNotificationsEnabled(!isNotificationsEnabled);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const toggleAds = () => {
    setIsAds(!isAds);
  };
  return (
    <ImageBackground
      src="https://th.bing.com/th/id/OIP.Gi2DiB0cXU9vVBGiAmUC0AHaEo?rs=1&pid=ImgDetMain"
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.scanQRButton}>
          <Icon type="antdesign" name="qrcode" color="#00C0C1" size={35} />
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/86/68/64/866864e81fdf004999e673ce333eeadb.jpg",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Kinchana Sumantra</Text>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.email}>youremail@domain.com</Text>
          <Text>|</Text>
          <Text style={styles.phone}>+84 123 345 7896</Text>
        </View>
        <View style={styles.actionForm}>
          <View style={styles.actionDetail}>
            <TouchableOpacity style={styles.action}>
              <Icon
                type="antdesign"
                name="solution1"
                color="#243666"
                size={24}
                style={styles.iconAction}
              />
              <Text>Edit profile information</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actionDetail}>
            <View style={styles.action}>
              <Icon
                type="antdesign"
                name="bells"
                color="#243666"
                size={24}
                style={styles.iconAction}
              />

              <Text>Notifications</Text>
            </View>
            <TouchableOpacity onPress={() => toggleNotifications()}>
              {isNotificationsEnabled ? (
                <Text style={{ color: "#00C0C1" }}>ON</Text>
              ) : (
                <Text style={{ color: "#00C0C1" }}>OFF</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.actionDetail}>
            <View style={styles.action}>
              <Icon
                type="entypo"
                name="language"
                color="#243666"
                size={24}
                style={styles.iconAction}
              />

              <Text>Language</Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <Text style={{ color: "#00C0C1" }}>English</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.actionForm}>
          <View style={styles.actionDetail}>
            <View style={styles.action}>
              <Icon
                type="entypo"
                name="block"
                color="#243666"
                size={24}
                style={styles.iconAction}
              />

              <Text>Block Ads</Text>
            </View>

            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleDarkMode}
              ios_backgroundColor="#3e3e3e"
              value={isDarkMode}
            />
          </View>
          <View style={styles.actionDetail}>
            <View style={styles.action}>
              <Icon
                type="fontisto"
                name="night-clear"
                color="#243666"
                size={24}
                style={styles.iconAction}
              />

              <Text>Dark mode</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleAds}
              ios_backgroundColor="#3e3e3e"
              value={isAds}
            />
          </View>
        </View>
        <View style={styles.actionForm}>
          <View style={styles.actionDetail}>
            <TouchableOpacity style={styles.action}>
              <Icon
                type="entypo"
                name="help"
                color="#243666"
                size={24}
                style={styles.iconAction}
              />
              <Text>Help & Support</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actionDetail}>
            <TouchableOpacity style={styles.action}>
              <Icon
                type="antdesign"
                name="contacts"
                color="#243666"
                size={24}
                style={styles.iconAction}
              />
              <Text>Contact us</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actionDetail}>
            <TouchableOpacity style={styles.action}>
              <Icon
                type="antdesign"
                name="lock"
                color="#243666"
                size={24}
                style={styles.iconAction}
              />
              <Text>Privacy policy</Text>
            </TouchableOpacity>
          </View>
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
    // backgroundColor: "#BFEFEF",
    // borderBottomLeftRadius: 200,
    // borderBottomRightRadius: 200,
    // overflow: "hidden",
  },
  container: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  avatar: {
    alignSelf: "center",
    marginTop: 110,
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },
  name: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "900",
    color: "#243666",
  },
  email: {
    fontSize: 12,
    color: "#243666",
    marginRight: 2,
  },
  phone: {
    fontSize: 12,
    color: "#243666",
  },
  actionDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  scanQRButton: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  actionForm: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0)",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 12,
    marginBottom: 20,
  },
  iconAction: {
    marginRight: 10,
  },
});

export default Profile;
