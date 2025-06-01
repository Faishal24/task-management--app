import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Div, Icon, Text } from "react-native-magnus";
import notificationHandler from "../../../utils/notificationHandler";

const Navbar = ({ navigation, worker, fetchData }) => {
  const specialClick = () => {
    notificationHandler(worker.tasks);
    fetchData();
  }

  return (
    <Div pt="lg" px={20} row justifyContent="space-between">
      <Icon
        name="menu"
        fontFamily="Ionicons"
        fontSize={32}
        color="#2E3A59"
        rounded="md"
      />

      <TouchableWithoutFeedback onPress={specialClick}>
        <Text fontSize="2xl" fontWeight="900" color="#2E3A59">
          TManage
        </Text>
      </TouchableWithoutFeedback>

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
