import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScreen from "./ExploreScreen";
import Map from "../components/Map";
import Profile from "../components/Profile";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExploreDetail from "../components/ExploreDetail";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen name="Details" component={ExploreDetail} />
    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00C0C1",
        tabBarInactiveTintColor: "rgba(0, 192, 193, 0.25)",
      }}
      initialRouteName="Map"
    >
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type="materialIcons" name="explore" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type="entypo" name="map" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type="ionicons" name="person" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
