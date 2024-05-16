import React from "react";
import { useRoute } from "@react-navigation/native";
import { Div, Text } from "react-native-magnus";
import Greeting from "../components/Greeting";
import Navbar from "../components/Navbar/Navbar";
import NavbarBottom from "../components/Navbar/NavbarBottom";
import Filter from "../components/Filter";
import Cards from "../components/Card/Cards";
import Lists from "../components/List/Lists";

const Home = ({ navigation }) => {
  const route = useRoute();
  const { worker } = route.params;
  return (
    <Div bg="#F2F5FF" h="100%">
      <Navbar navigation={navigation} worker={worker}/>
      <Div mt={15} mx={20}>
        <Greeting worker={worker} />
        <Filter />
        <Cards navigation={navigation} worker={worker}/>
        <Text fontSize="3xl" fontWeight="900" mb={10}>
          Sedang Berjalan
        </Text>
        <Lists navigation={navigation} worker={worker}/>
      </Div>
      {/* <NavbarBottom navigation={navigation} worker={worker}/> */}
    </Div>
  );
};

export default Home;
