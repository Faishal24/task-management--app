import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from 'react-native-magnus';
import * as NavigationBar from 'expo-navigation-bar';
import Home from "./src/components/Home";

export default function App() {
  NavigationBar.setBackgroundColorAsync("#F2F5FF")
  return (
    <ThemeProvider>
      <StatusBar
        barStyle="light-content" backgroundColor="#3498db"
      />
      <Home/>
    </ThemeProvider>
  );
}
