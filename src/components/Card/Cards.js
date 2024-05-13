import React from "react";
import { ScrollView } from "react-native";
import { Div, Icon } from "react-native-magnus";
import Card from "./Card";

const Cards = () => {
  return (
    <Div>
      <Div justifyContent="space-between" row mx={-20}>
        <ScrollView horizontal={true}>
        <Card
          title="Tugas 1"
          description="Ini deskripsi tugas"
          date="13 Mei 2024"
          opacity={1}
        />
        <Card
          title="Tugas 2"
          description="Ini deskripsi tugas"
          date="11 Mei 2024"
          opacity={0.5}
        />
        </ScrollView>
      </Div>

      <Div row justifyContent="center" mb={10}>
        <Icon
          name="dot-fill"
          fontFamily="Octicons"
          fontSize={16}
          color="#008CFF"
          rounded="md"
        />
        <Icon
          name="dot"
          fontFamily="Octicons"
          fontSize={16}
          color="#66717E"
          rounded="md"
          mx={5}
        />
        <Icon
          name="dot"
          fontFamily="Octicons"
          fontSize={16}
          color="#66717E"
          rounded="md"
        />
      </Div>
    </Div>
  );
};

export default Cards;
