import { useRoute } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RefreshControl, ScrollView, TouchableOpacity } from "react-native";
import { Div, Icon } from "react-native-magnus";
import Calendar from "./Pages/Calendar";
import Home from "./Pages/Home";
import Setting from "./Pages/Setting";
import TaskList from "./Pages/TaskList";

const Template = ({navigation}) => {
  const ip = process.env.EXPO_PUBLIC_SERVER_ADDR;
  const [activeScreen, setActiveScreen] = useState("Home");
  const route = useRoute();
  const { worker } = route.params;
  const [newData, setNewData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${ip}/tasks/${worker._id}`);
      setNewData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      await fetchData();
    } catch (error) {
      console.error("Error during refresh:", error);
    } finally {
      setRefreshing(false);
    }
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, []);

  const renderScreen = () => {
    switch (activeScreen) {
      case "Home":
        return <Home worker={newData} navigation={navigation} fetchData={fetchData}/>;
      case "Calendar":
        return <Calendar navigation={navigation}/>;
      case "Setting":
        return <Setting worker={worker} navigation={navigation}/>;
      case "TaskList":
        return <TaskList worker={worker} navigation={navigation}/>;
      default:
        return <Home worker={worker} navigation={navigation}/>;
    }
  };
  return (
    <Div>
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          } style={{ height: "100%", backgroundColor: "#F2F5FF" }}>
        {renderScreen()}
      </ScrollView>

      <Div
        bottom={15}
        position="absolute"
        w="100%"
        row
        justifyContent="space-around"
      >
        <TouchableOpacity onPress={() => setActiveScreen('Home')}>
          <Icon
            name="home"
            fontFamily="Ionicons"
            fontSize={32}
            color={activeScreen === 'Home' ? '#008CFF' : '#D8DEF3'}
            rounded="md"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveScreen('TaskList')}>
          <Icon
            name="list"
            fontFamily="Ionicons"
            fontSize={32}
            color={activeScreen === 'TaskList' ? '#008CFF' : '#D8DEF3'}
            rounded="md"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveScreen('Calendar')}>
          <Icon
            name="calendar"
            fontFamily="Ionicons"
            fontSize={32}
            color={activeScreen === 'Calendar' ? '#008CFF' : '#D8DEF3'}
            rounded="md"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveScreen('Setting')}>
          <Icon
            name="settings"
            fontFamily="Ionicons"
            fontSize={32}
            color={activeScreen === 'Setting' ? '#008CFF' : '#D8DEF3'}
            rounded="md"
          />
        </TouchableOpacity>
      </Div>
    </Div>
  );
};

export default Template;
