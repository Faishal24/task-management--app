import React from "react";
import { Image } from "react-native";
import { Div, Text, Icon, Input, Button } from "react-native-magnus";
const logo = require("./../../assets/logo.png");

const Login = ({ navigation }) => {
  return (
    <Div h="100%" bg="#F2F5FF">
      <Div mt={0} mx={20}>
        <Div alignItems="center" mt={80} mb={30}>
          <Image style={{ width: 170, height: 170 }} source={logo} />

          <Text fontSize={35} fontWeight="400" color="#2E3A59">
            Selamat Datang
          </Text>
          <Text fontSize={35} fontWeight="400">
            di{" "}
            <Text fontSize={35} color="#008CFF" fontWeight="900">
              TManage
            </Text>
          </Text>
        </Div>

        <Input
          placeholder="Nama"
          p={10}
          focusBorderColor="#008CFF"
          prefix={
            <Icon
              name="user"
              color="gray900"
              fontFamily="Feather"
              fontSize={17}
            />
          }
          borderColor="#F2F5FF"
          rounded={10}
          mb={20}
        />
        <Input
          placeholder="Kata Sandi"
          p={10}
          focusBorderColor="#008CFF"
          secureTextEntry
          prefix={
            <Icon
              name="form-textbox-password"
              color="gray900"
              fontFamily="MaterialCommunityIcons"
              fontSize={17}
            />
          }
          borderColor="#F2F5FF"
          rounded={10}
          mb={20}
        />
        <Button
          w="100%"
          h={50}
          rounded={100}
          bg="#008CFF"
          fontWeight="900"
          onPress={() => navigation.navigate("Home")}
        >
          Masuk
        </Button>

        <Text
          my={10}
          fontSize="lg"
          fontWeight="bold"
          color="#008CFF"
          textDecorLine="underline"
          textAlign="center"
        >
          Lupa Sandi?
        </Text>
      </Div>
      {/* <Div bottom={0} position="absolute" w="100%" left="45%">
        <Text fontSize="md" fontWeight="bold" color="#2E3A59">
          2024
        </Text>
      </Div> */}
    </Div>
  );
};

export default Login;
