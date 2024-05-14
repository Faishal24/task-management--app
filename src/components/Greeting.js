import React from "react";
import { TouchableOpacity } from "react-native";
import { Div, Text } from "react-native-magnus";
import Card from "./Card/Card";

const Greeting = ({ worker }) => {
  return (
    <Div>
      <Text
        fontSize="5xl"
        fontWeight="900"
        textTransform="uppercase"
        letterSpacing={2}
        mt="sm"
        mb={5}
      >
        Hi, {worker.name.split(' ')[0]}!
      </Text>
      <TouchableOpacity onPress={() =>console.log(worker)}>
        <Text mb={30} fontSize="xl">
          Selamat Pagi
        </Text>
      </TouchableOpacity>
    </Div>
  );
};

export default Greeting;
