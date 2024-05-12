import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from 'react-native-magnus';
import * as NavigationBar from 'expo-navigation-bar';
import Home from "./src/Home";

export default function App() {
  NavigationBar.setBackgroundColorAsync("#F2F5FF")
  return (
    <ThemeProvider>
      <StatusBar
        barStyle="dark-content" backgroundColor="#F2F5FF"
      />
      <Home/>
    </ThemeProvider>
  );
}
