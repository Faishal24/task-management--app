import React from "react";
import { View, StyleSheet } from "react-native";
import { Div, Text, Icon, Button } from "react-native-magnus";
import toCamelCase from "../../../utils/camelCase";

const List = ({ title, date, key, isList, status }) => {
  const getStatusColor = (status) => {
    if (status === "submitted") return "blue400";
    if (status === "done") return "green400";
    return "red400";
  };

  return (
    <Div
      w="100%"
      bg="#FFFFFF"
      rounded="lg"
      p={15}
      mr={15}
      my={5}
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
        {isList && (
          <Div>
            <View style={{ width: '100%', height: 1, backgroundColor: '#edf2f7', marginVertical: 10 }} />
            <Text
              color={getStatusColor(status)}
              fontSize="md"
              fontWeight="800"
              textAlign="center"
            >
              {toCamelCase(status)}
            </Text>
          </Div>
        )}
    </Div>
  );
};

export default List;
