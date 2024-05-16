import React, {useState} from "react";
import { TouchableOpacity } from "react-native";
import { Div, Icon } from "react-native-magnus";

const NavbarBottom = ({navigation, worker}) => {
  const [navActive, setNavActive] = useState(1)

  const handleHome = (value) => {
    setNavActive(value)
    navigation.navigate('Home', {worker, navActive: value})
  }
  const handleCalendar = (value) => {
    setNavActive(value)
    navigation.navigate('Calendar', {worker})
  }
  const handleSetting = (value) => {
    setNavActive(value)
    navigation.navigate('Setting', {worker})
  }

  return (
    <Div
      bottom={0}
      position="absolute"
      w="100%"
      row
      justifyContent="space-around"
    >
      <TouchableOpacity onPress={() => handleHome(1)}>
        <Icon
          name="home"
          fontFamily="Ionicons"
          fontSize={32}
          color={navActive == 1 ? "#008CFF" : "#D8DEF3"}
          rounded="md"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCalendar(2)}>
        <Icon
          name="calendar"
          fontFamily="Ionicons"
          fontSize={32}
          color={navActive == 2 ? "#008CFF" : "#D8DEF3"}
          rounded="md"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSetting(3)}>
        <Icon
          name="settings"
          fontFamily="Ionicons"
          fontSize={32}
          color={navActive == 3 ? "#008CFF" : "#D8DEF3"}
          rounded="md"
        />
      </TouchableOpacity>
    </Div>
  );
};

export default NavbarBottom;
