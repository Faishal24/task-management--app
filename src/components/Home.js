import React from "react";
import { View } from "react-native";
import { Div, Text } from "react-native-magnus";
import Greeting from "./Greeting";
import Card from "./Card";
import Navbar from "./Navbar";
import NavbarBottom from "./NavbarBottom";
import Filter from "./Filter";
import List from "./List";

const Home = () => {
  return (
    <Div bg="#F2F5FF" h="100%">
      <Navbar />
      <Div mt={30} mx={20}>
        <Greeting />
        <Filter/>
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
            opacity={1}
          />
          <Card
            title="Tugas 2"
            description="Ini juga deskripsi tugas"
            date="11 Mei 2024"
            opacity={.5}
          />
        </View>
        <Text fontSize="3xl" fontWeight="900">Sedang Berjalan</Text>
        <List title="Laporan" date="2 hari lalu"/>
      </Div>
      <NavbarBottom/>
    </Div>
  );
};

export default Home;
