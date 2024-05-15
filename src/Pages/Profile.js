import React from "react";
import { Image } from "react-native";
import { Div, Header, Button, Icon, Text } from "react-native-magnus";
import { useRoute } from "@react-navigation/native";
const logo = require("./../../assets/splash2.png");

const Profile = () => {
  const route = useRoute();
  const { worker } = route.params;

  return (
    <Div>
      <Header
        p="lg"
        alignment="center"
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
      >
        Profile
      </Header>

      <Div p={25} alignItems="center">
        <Image
          style={{
            width: 110,
            height: 110,
            marginBottom: 30,
            borderRadius: 100,
          }}
          source={logo}
        />
        <Text fontSize="3xl">{worker.name}</Text>
      </Div>
    </Div>
  );
};

export default Profile;
