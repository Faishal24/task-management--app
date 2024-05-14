import React from "react";
import { TouchableOpacity } from "react-native";
import { Div, Icon } from "react-native-magnus";

const NavbarBottom = ({navigation}) => {
  return (
    <Div
      bottom={0}
      position="absolute"
      w="100%"
      row
      justifyContent="space-around"
    >
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon
          name="home"
          fontFamily="Ionicons"
          fontSize={32}
          color="#008CFF"
          rounded="md"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
        <Icon
          name="calendar"
          fontFamily="Ionicons"
          fontSize={32}
          color="#D8DEF3"
          rounded="md"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Icon
          name="settings"
          fontFamily="Ionicons"
          fontSize={32}
          color="#D8DEF3"
          rounded="md"
        />
      </TouchableOpacity>
    </Div>
  );
};

export default NavbarBottom;
