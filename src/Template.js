import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Div, Icon } from "react-native-magnus";
import Home from "./Pages/Home";
import Calendar from "./Pages/Calendar";
import Setting from "./Pages/Setting";

const Template = ({navigation}) => {
  const [activeScreen, setActiveScreen] = useState("Home");
  const route = useRoute();
  const { worker } = route.params;

  const renderScreen = () => {
    switch (activeScreen) {
      case "Home":
        return <Home worker={worker} navigation={navigation}/>;
      case "Calendar":
        return <Calendar navigation={navigation}/>;
      case "Setting":
        return <Setting worker={worker} navigation={navigation}/>;
      default:
        return <Home worker={worker} navigation={navigation}/>;
    }
  };
  return (
    <Div>
      {renderScreen()}

      <Div
        bottom={0}
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
