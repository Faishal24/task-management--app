import React from "react";
import { View, StyleSheet } from "react-native";
import { Div, Text } from "react-native-magnus";

const List = ({ title, date }) => {
  return (
    <Div
      w="100%"
      h={70}
      bg="#FFFFFF"
      rounded="lg"
      p={15}
      mr={15}
      my={20}
      // justifyContent='center'
      // alignItems='center'
    >
      <Div flex={1} justifyContent="space-around">
        <Text color="#2E3A59" fontSize="lg" fontWeight="800">
          {title}
        </Text>
        <Div>
          <Text color="#2E3A59" fontSize="md" fontWeight="800">
            {date}
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default List;
