import React from "react";
import { Div, Text, Icon } from "react-native-magnus";

const Navbar = () => {
  return (
    <Div pt="lg" px={20} row justifyContent="space-between">
      <Icon
        name="menu"
        fontFamily="Ionicons"
        fontSize={32}
        color="#66717E"
        rounded="md"
      />

      <Icon 
        name="user-circle" 
        fontFamily="FontAwesome"
        fontSize={30}
        color="#66717E"    
    />
    </Div>
  );
};

export default Navbar;
