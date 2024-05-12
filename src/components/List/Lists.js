import React from "react";
import { ScrollView } from "react-native";
import { Div } from "react-native-magnus";
import List from "./List";

const Lists = () => {
  const handlePress = () => {
    console.log("View ditekan!");
  };

  return (
    <Div h={190}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <List title="Laporan" date="2 hari lalu" />
        <List title="Laporan" date="baru saja" />
        <List title="Laporan" date="baru saja" />
      </ScrollView>
    </Div>
  );
};

export default Lists;
