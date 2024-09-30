import React from "react";
import { TouchableOpacity } from "react-native";
import { Div, Icon, Text } from "react-native-magnus";

const Navbar = ({ navigation, worker }) => {
  return (
    <Div pt="lg" px={20} row justifyContent="space-between">
      <Icon
        name="menu"
        fontFamily="Ionicons"
        fontSize={32}
        color="#2E3A59"
        rounded="md"
      />
      <Text fontSize="2xl" fontWeight="900" color="#2E3A59">
        TManage
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Profile", { worker })}
      >
        <Div bg="#2E3A59" h={35} w={35} rounded={30} justifyContent="center">
          <Icon
            name="user-alt"
            fontFamily="FontAwesome5"
            fontSize={18}
            color="#F2F5FF"
            rounded="md"
          />
        </Div>
      </TouchableOpacity>
    </Div>
  );
};

export default Navbar;
