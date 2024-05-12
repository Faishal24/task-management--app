import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from 'react-native-magnus';
import Home from "./src/components/Home";


export default function App() {
  return (
    <ThemeProvider>
      <StatusBar
        barStyle="light-content" backgroundColor="#3498db"
      />
      <Home/>
    </ThemeProvider>
  );
}
