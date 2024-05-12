import React from "react";
import { Div, Icon } from "react-native-magnus";

const Navbar = () => {
  return (
    <Div pt="lg" px={20} row justifyContent="space-between">
      <Icon
        name="menu"
        fontFamily="Ionicons"
        fontSize={32}
        color="#2E3A59"
        rounded="md"
      />

      <Div bg="#2E3A59" h={35} w={35} rounded={30} justifyContent="center">
        <Icon
          name="user-alt"
          fontFamily="FontAwesome5"
          fontSize={18}
          color="#F2F5FF"
          rounded="md"
        />
      </Div>
    </Div>
  );
};

export default Navbar;
