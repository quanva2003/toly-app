import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigate = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <ImageBackground
      src="https://th.bing.com/th/id/OIP.Gi2DiB0cXU9vVBGiAmUC0AHaEo?rs=1&pid=ImgDetMain"
      style={styles.backgroundImage}
    >
      <View style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.header}>Login</Text>
          <Text style={styles.subHeader}>Welcome back to the app</Text>

          <TouchableOpacity style={styles.button}>
            <Image
              source={{
                uri: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/150_Google_logo_logos-512.png",
              }}
              style={styles.icon}
            />
            <Text style={{ fontSize: 18 }}>Login with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Image
              source={{
                uri: "https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Background-Image.png",
              }}
              style={styles.icon}
            />
            <Text style={{ fontSize: 18 }}>Login with Facebook</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>or by email</Text>

          <TextInput placeholder="Email Address" style={styles.input} />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              style={styles.inputPass}
            />
            <TouchableOpacity
              onPress={toggleShowPassword}
              style={styles.iconContainer}
            >
              <Icon
                name={showPassword ? "eye" : "eye-slash"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.forgot}>Forgot Passwork?</Text>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.formFooter}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigate.push("SignUp")}>
              <View style={styles.linkSignUp}>
                <Text style={{ fontStyle: "italic", color: "#00C0C1" }}>
                  Create an account
                </Text>
              </View>
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
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Add background color with opacity
  },
  header: {
    fontSize: 28,
    color: "#243666",
    marginBottom: 5,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 18,
    color: "#243666",
    marginBottom: 20,
    fontWeight: "300",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  orText: {
    marginTop: 10,
    textAlign: "center",
    marginBottom: 17,
    fontStyle: "italic",
    fontWeight: "300",
  },
  input: {
    backgroundColor: "#ffffff",
    borderColor: "#000",
    borderWidth: 1.5,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  inputPass: {
    backgroundColor: "#ffffff",
    borderColor: "#000",
    borderWidth: 1.5,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    top: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#000",
  },
  forgot: {
    textAlign: "right",
    marginBottom: 10,
  },
  signInButton: {
    borderRadius: 10,
    backgroundColor: "#00C0C1",
    padding: 20,
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
  },
  formFooter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  linkSignUp: {
    marginLeft: 5,
  },
});

export default LoginScreen;
