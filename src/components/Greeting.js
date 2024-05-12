import React from "react";
import { View } from "react-native";
import { Div, Text } from "react-native-magnus";
import Card from "./Card";

const Greeting = () => {
  return (
    <Div>
      <Text
        fontSize="5xl"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing={2}
        mt="sm"
        mb={5}
      >
        Hi, Faishal!
      </Text>
      <Text mb={30} fontSize="xl">Selamat Pagi</Text>
    </Div>
  );
};

export default Greeting;
