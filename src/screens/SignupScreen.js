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

const SignupScreen = () => {
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
          <Text style={styles.header}>Create an account</Text>
          <Text style={styles.label}>Name</Text>
          <TextInput placeholder="John Doe" style={styles.input} />
          <Text style={styles.label}>Email Address</Text>
          <TextInput placeholder="Email Address" style={styles.input} />
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="*********"
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
          <View style={styles.formFooter}>
            <Text style={{ fontWeight: "300" }}>
              By continuing, you agree to our{" "}
            </Text>
            <TouchableOpacity onPress={() => navigate.push("SignUp")}>
              <Text style={{ color: "#00C0C1", fontWeight: "300" }}>
                terms of service
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.separatorContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity style={styles.button}>
            <Image
              source={{
                uri: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/150_Google_logo_logos-512.png",
              }}
              style={styles.icon}
            />
            <Text style={{ fontSize: 18 }}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Image
              source={{
                uri: "https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Background-Image.png",
              }}
              style={styles.icon}
            />
            <Text style={{ fontSize: 18 }}>Continue with Facebook</Text>
          </TouchableOpacity>

          <View style={styles.formFooter}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigate.push("Login")}>
              <Text style={{ fontStyle: "italic", color: "#00C0C1" }}>
                Sign in here
              </Text>
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
    marginBottom: 15,
    fontWeight: "bold",
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
    textAlign: "center",
    marginBottom: 10,
    fontStyle: "italic",
  },
  input: {
    backgroundColor: "#ffffff",
    borderColor: "#000",
    borderWidth: 1.5,
    marginBottom: 10,
    padding: 10,
    paddingLeft: 15,
    borderRadius: 10,
  },
  label: {
    fontWeight: "500",
    marginBottom: 5,
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
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#00C0C1",
    padding: 18,
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 24,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "600",
  },
  formFooter: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 5,
  },

  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 20,
  },
  line: {
    flex: 1,
    height: 0.5,
    backgroundColor: "#000",
  },
  orText: {
    width: 30,
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default SignupScreen;
