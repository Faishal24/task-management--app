import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Div } from "react-native-magnus";
import List from "./List";

const Lists = ({ navigation }) => {
  const handlePress = () => {
    console.log("View ditekan!");
  };

  return (
    <Div h={190}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.navigate("Task")}>
          <List title="Laporan" date="2 hari lalu" />
        </TouchableOpacity>
        <List title="Laporan" date="baru saja" />
        <List title="Laporan" date="baru saja" />
      </ScrollView>
    </Div>
  );
};

export default Lists;
