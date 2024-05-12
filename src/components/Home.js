import React from "react";
import { View } from "react-native";
import { Div } from "react-native-magnus";
import Greeting from "./Greeting";
import Card from "./Card";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Div bg="#F2F5FF" h="100%">
      <Navbar />
      <Div mt={30} mx={20}>
        <Greeting />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Card
            title="Tugas 1"
            description="Ini deskripsi tugas"
            date="13 Mei 2024"
          />
          <Card
            title="Tugas 2"
            description="Ini juga deskripsi tugas"
            date="11 Mei 2024"
          />
        </View>
      </Div>
    </Div>
  );
};

export default Home;
