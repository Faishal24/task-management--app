import React from "react";
import { ScrollView } from "react-native";
import { Div } from "react-native-magnus";
import List from "./List";

const Lists = () => {
  return (
    <Div>
      <List title="Laporan" date="2 hari lalu" />
      <List title="Laporan" date="baru saja" />
    </Div>
  );
};

export default Lists;
