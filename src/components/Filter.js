import React from "react";
import { Div, Text } from "react-native-magnus";

const Filter = () => {
  return (
    <Div row justifyContent="space-between">
      <Div bg="#FFFFFF" px={25} py={15} rounded={50} shadow="md">
        <Text color="#2E3A59" fontWeight="900">
          Tersedia
        </Text>
      </Div>
      <Div bg="#D8DEF3" px={25} py={15} rounded={50}>
        <Text color="#2E3A59">Berjalan</Text>
      </Div>
      <Div bg="#D8DEF3" px={25} py={15} rounded={50}>
        <Text color="#2E3A59">Selesai</Text>
      </Div>
    </Div>
  );
};

export default Filter;
