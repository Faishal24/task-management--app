import React from "react";
import { View, StyleSheet } from "react-native";
import { Div, Text, Icon, Button } from "react-native-magnus";

const List = ({ title, date, key }) => {
  return (
    <Div
      w="100%"
      bg="#FFFFFF"
      rounded="lg"
      p={15}
      mr={15}
      my={5}
      // justifyContent='center'
      // alignItems='center'
    >
        <Div row alignItems="center">
          <Div bg="#008CFF" rounded="lg" p={10}>
            <Icon
              name="calendar"
              fontFamily="Ionicons"
              fontSize={32}
              color="#D8DEF3"
              rounded="md"
            />
          </Div>
          <Div ml={10}>
            <Text color="#2E3A59" fontSize="xl" fontWeight="800">
              {title}
            </Text>
            <Text color="#D8DEF3" fontSize="md" fontWeight="800">
              {date}
            </Text>
          </Div>
        </Div>
    </Div>
  );
};

export default List;
