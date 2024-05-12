import React from "react";
import { View } from "react-native";
import { Div, Text, Icon } from "react-native-magnus";
import Greeting from "./components/Greeting";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar";
import NavbarBottom from "./components/NavbarBottom";
import Filter from "./components/Filter";
import List from "./components/List/List";
import Cards from "./components/Card/Cards";
import Lists from "./components/List/Lists";

const Home = () => {
  return (
    <Div bg="#F2F5FF" h="100%">
      <Navbar />
      <Div mt={15} mx={20}>
        <Greeting />
        <Filter />
        <Cards />
        <Text fontSize="3xl" fontWeight="900" mb={10}>
          Sedang Berjalan
        </Text>
        <Lists/>
      </Div>
      <NavbarBottom />
    </Div>
  );
};

export default Home;
