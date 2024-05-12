import React from "react";
import { View } from "react-native";
import { Div, Text, Icon } from "react-native-magnus";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import NavbarBottom from "./components/NavbarBottom";
import Filter from "./components/Filter";
import List from "./components/List";

const Home = () => {
  return (
    <Div bg="#F2F5FF" h="100%">
      <Navbar />
      <Div mt={15} mx={20}>
        <Greeting />
        <Filter />
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
            opacity={0.5}
          />
        </View>

        <Div row justifyContent="center" mb={10}>
          <Icon
            name="dot-fill"
            fontFamily="Octicons"
            fontSize={16}
            color="#008CFF"
            rounded="md"
          />
          <Icon
            name="dot"
            fontFamily="Octicons"
            fontSize={16}
            color="#66717E"
            rounded="md"
            mx={5}
          />
          <Icon
            name="dot"
            fontFamily="Octicons"
            fontSize={16}
            color="#66717E"
            rounded="md"
          />
        </Div>

        <Text fontSize="3xl" fontWeight="900" mb={10}>
          Sedang Berjalan
        </Text>
        <List title="Laporan" date="2 hari lalu" />
        <List title="Laporan" date="baru saja" />
      </Div>
      <NavbarBottom />
    </Div>
  );
};

export default Home;
