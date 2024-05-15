import React from "react";
import { TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Button, Icon, Div, Header, Image, Text } from "react-native-magnus";
import toCamelCase from "../../utils/CamelCase";
import NavbarBottom from "../components/Navbar/NavbarBottom";
const logo = require("./../../assets/splash2.png");

const Setting = ({ navigation }) => {
  const route = useRoute();
  const { worker } = route.params;

  return (
    <Div bg="#F2F5FF" h="100%">
      <Header
        p="lg"
        alignment="center"
        shadow={0}
        bg="#F2F5FF"
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
      >
        Setting
      </Header>

      <Div p={25}>
        {/* Data Diri */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile", { worker })}
        >
          <Div
            p={15}
            bg="#D8DEF3"
            rounded={10}
            borderWidth={1}
            borderColor="#b3b8c9"
            row
            justifyContent="space-between"
          >
            <Div row>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                }}
                source={logo}
              />
              <Div justifyContent="center" ml={10}>
                <Text fontSize="lg" fontWeight="900">
                  {worker.name}
                </Text>
                <Text fontSize="lg">{toCamelCase(worker.devision)}</Text>
              </Div>
            </Div>

            <Icon
              name="keyboard-arrow-right"
              fontFamily="MaterialIcons"
              fontSize={25}
              color="#2E3A59"
            />
          </Div>
        </TouchableOpacity>

        {/*  */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
        >
          <Div
            p={15}
            bg="#D8DEF3"
            rounded={10}
            borderWidth={1}
            borderColor="#b3b8c9"
            row
            justifyContent="space-between"
            my={20}
          >
            <Div row>
              <Icon
                name="logout"
                fontFamily="MaterialIcons"
                fontSize={25}
                color="red600"
              />
                <Div justifyContent="center" ml={10}>
                  <Text fontSize="lg">Logout</Text>
                </Div>
            </Div>

            <Icon
              name="keyboard-arrow-right"
              fontFamily="MaterialIcons"
              fontSize={25}
              color="#2E3A59"
            />
          </Div>
        </TouchableOpacity>
      </Div>

      <NavbarBottom navigation={navigation} worker={worker}/>
    </Div>
  );
};

export default Setting;
