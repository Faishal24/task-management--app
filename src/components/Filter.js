import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Div, Text } from "react-native-magnus";
import Cards from "./Card/Cards";

const Filter = ({ navigation, worker }) => {
  const [activeFilter, setActiveFilter] = useState("Tersedia");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <Div>
      <Div row justifyContent="space-between">
        <TouchableOpacity onPress={() => handleFilterChange("Tersedia")}>
          <Div
            bg={activeFilter === "Tersedia" ? "#D8DEF3" : "#FFFFFF"}
            px={25}
            py={15}
            rounded={50}
          >
            <Text
              color="#2E3A59"
              fontWeight={activeFilter === "Tersedia" ? "900" : "normal"}
            >
              Tersedia
            </Text>
          </Div>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleFilterChange("Berjalan")}>
          <Div
            bg={activeFilter === "Berjalan" ? "#D8DEF3" : "#FFFFFF"}
            px={25}
            py={15}
            rounded={50}
          >
            <Text
              color="#2E3A59"
              fontWeight={activeFilter === "Berjalan" ? "900" : "normal"}
            >
              Berjalan
            </Text>
          </Div>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleFilterChange("Selesai")}>
          <Div
            bg={activeFilter === "Selesai" ? "#D8DEF3" : "#FFFFFF"}
            px={25}
            py={15}
            rounded={50}
          >
            <Text
              color="#2E3A59"
              fontWeight={activeFilter === "Selesai" ? "900" : "normal"}
            >
              Selesai
            </Text>
          </Div>
        </TouchableOpacity>
      </Div>

      <Cards navigation={navigation} worker={worker} filter={activeFilter} />
    </Div>
  );
};

export default Filter;
