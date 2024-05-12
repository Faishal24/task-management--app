// Card.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { Div, Text } from "react-native-magnus";

const Card = ({ title, description, date }) => {
  return (
    <Div
      w={200}
      h={200}
      bg="#008CFF"
      rounded="lg"
      p={15}
      mr={20}
      // justifyContent='center'
      // alignItems='center'
    >
      <Div flex={1} justifyContent="space-around">
        <Text color="#FFFFFF" fontSize={20} fontWeight="800">
          {title}
        </Text>
        <Div>
          <Text color="#FFFFFF" fontSize={27} fontWeight="800">
            {description}
          </Text>
          <Text color="#FFFFFF" fontSize={15} fontWeight="300" mt={10}>
            {date}
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default Card;
