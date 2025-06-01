// Card.js
import React from "react";
import { Div, Text, Icon } from "react-native-magnus";

const Card = ({ title, description, date, opacity }) => {
  return (
    <Div
      w={210}
      h={210}
      bg="#008CFF"
      rounded="2xl"
      p={25}
      // mx={20}
      my={20}
      opacity={opacity}
    >
      <Div flex={1} justifyContent="space-between">
        <Div row>
          <Icon
            name="tasks"
            fontFamily="FontAwesome5"
            fontSize={20}
            color="white"
            rounded="md"
            bg="#54b2ff"
            h={35}
            w={35}
            mr={10}
          />
        <Text color="#FFFFFF" fontSize={20} fontWeight="800">
          {title}
        </Text>
        </Div>
        <Div>
          <Text color="#FFFFFF" fontSize={23} fontWeight="800">
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
