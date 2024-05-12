import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { ThemeProvider } from 'react-native-magnus';
import * as NavigationBar from 'expo-navigation-bar';
import Home from "./src/Pages/Home";
import TestApi from "./src/Pages/TestApi";

const Stack = createNativeStackNavigator()

export default function App() {
  NavigationBar.setBackgroundColorAsync("#F2F5FF")
  
  return (
    <ThemeProvider>
      <StatusBar
        barStyle="dark-content" backgroundColor="#F2F5FF"
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Tes" component={TestApi}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
