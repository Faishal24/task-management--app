import React from "react";
import { Div, Text } from "react-native-magnus";
import Greeting from "../components/Greeting";
import Navbar from "../components/Navbar/Navbar";
import NavbarBottom from "../components/Navbar/NavbarBottom";
import Filter from "../components/Filter";
import Cards from "../components/Card/Cards";
import Lists from "../components/List/Lists";

const Home = ({navigation}) => {
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
        <Lists />
      </Div>
        <NavbarBottom navigation={navigation}/>
    </Div>
  );
};

export default Home;
