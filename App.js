import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import MapScreen from "./src/screens/MapScreen";
import HomeScreen from "./src/screens/HomeScreen";
import One from "./src/screens/One";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          {/* <Stack.Screen name="Map" component={MapScreen} /> */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignupScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* <Stack.Screen name="TabOne" component={One} /> */}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
