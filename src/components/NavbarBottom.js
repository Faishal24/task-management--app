import React from "react";
import { View } from "react-native";
import { Div, Icon } from "react-native-magnus";

const NavbarBottom = () => {
  return (
    <Div
      bottom={0}
      position="absolute"
      w="100%"
      row
      justifyContent="space-around"
    >
      <Icon
        name="home"
        fontFamily="Ionicons"
        fontSize={32}
        color="#D8DEF3"
        rounded="md"
      />
      <Icon
        name="calendar"
        fontFamily="Ionicons"
        fontSize={32}
        color="#D8DEF3"
        rounded="md"
      />
      <Icon
        name="settings"
        fontFamily="Ionicons"
        fontSize={32}
        color="#D8DEF3"
        rounded="md"
      />
    </Div>
  );
};

export default NavbarBottom;
