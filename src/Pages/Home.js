import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Div, Text } from "react-native-magnus";
import Greeting from "../components/Greeting";
import Navbar from "../components/Navbar/Navbar";
import Filter from "../components/Filter";
import Lists from "../components/List/Lists";
import notificationHandler from "../../utils/notificationHandler";

const Home = ({ navigation }) => {
  const route = useRoute();
  const { worker } = route.params;

  useEffect(() => {
    notificationHandler(worker.tasks);
  }, [])

  return (
    <Div bg="#F2F5FF" h="100%">
      <Navbar navigation={navigation} worker={worker}/>
      <Div mt={15} mx={20}>
        <Greeting worker={worker} />
        <Filter navigation={navigation} worker={worker}/>
        
        <Text fontSize="3xl" fontWeight="900" mb={10}>
          Tenggat Waktu Terdekat
        </Text>
        <Lists navigation={navigation} worker={worker}/>
      </Div>
    </Div>
  );
};

export default Home;
