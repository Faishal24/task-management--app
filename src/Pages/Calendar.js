import React from "react";
import { Div, Text, Header, Button, Icon } from "react-native-magnus";
import List from "../components/List/List";

const Calendar = () => {
  return (
    <Div bg="#F2F5FF" h="100%">
      <Div
        bg="white"
        roundedBottomLeft={25}
        roundedBottomRight={25}
        shadow="sm"
      >
        <Header
          p="lg"
          alignment="left"
          shadow={0}
          bg="white"
          prefix={
            <Button bg="transparent">
              <Icon
                name="arrow-back"
                fontFamily="Ionicons"
                fontSize={25}
                color="#2E3A59"
              />
            </Button>
          }
          suffix={
            <Button bg="transparent">
              <Icon
                name="search"
                fontFamily="FontAwesome"
                fontSize="2xl"
                color="#2E3A59"
              />
            </Button>
          }
        ></Header>

        <Div pt={15} px={20} pb={30}>
          <Text fontSize={35} fontWeight="900" color="#2E3A59">
            Mei 2024
          </Text>

          <Div row justifyContent="space-around" mt={20}>
            <Div
              w={50}
              h={60}
              rounded={20}
              alignItems="center"
              justifyContent="center"
            >
              <Text>Mo</Text>
              <Text>3</Text>
            </Div>
            <Div
              w={50}
              h={60}
              rounded={20}
              alignItems="center"
              justifyContent="center"
            >
              <Text>Tu</Text>
              <Text>3</Text>
            </Div>
            <Div
              bg="#99b5ff"
              w={50}
              h={60}
              rounded={20}
              alignItems="center"
              justifyContent="center"
            >
              <Text>We</Text>
              <Text>3</Text>
            </Div>
            <Div
              w={50}
              h={60}
              rounded={20}
              alignItems="center"
              justifyContent="center"
            >
              <Text>Th</Text>
              <Text>3</Text>
            </Div>
            <Div
              w={50}
              h={60}
              rounded={20}
              alignItems="center"
              justifyContent="center"
            >
              <Text>Fr</Text>
              <Text>3</Text>
            </Div>
            <Div
              w={50}
              h={60}
              rounded={20}
              alignItems="center"
              justifyContent="center"
            >
              <Text>Sa</Text>
              <Text>3</Text>
            </Div>
            <Div
              w={50}
              h={60}
              rounded={20}
              alignItems="center"
              justifyContent="center"
            >
              <Text>Su</Text>
              <Text>3</Text>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div pt={30} px={20}>
        <Text fontSize={30} fontWeight="900" pb={30}>Tugas</Text>
        <List title="Laporan" date="2 hari lalu" />
      </Div>
    </Div>
  );
};

export default Calendar;
