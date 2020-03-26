import React from "react";

// Screens
import Login from "../screens/Login";
import Signup from '../screens/Signup';
import Home from "../screens/Home";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Custom styles
import { colors } from "../shared/styles";

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "THE COMPANY",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.secondary,
          headerTitleStyle: {
              letterSpacing: 1,
              padding: 15,
              fontSize: 15
          }
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen options={{headerMode: 'none', headerShown: false}} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
