import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Div, Header, Button, Icon, Text } from "react-native-magnus";
import { useRoute } from "@react-navigation/native";
const logo = require("./../../assets/splash2.png");

const Profile = () => {
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
        Profile
      </Header>

      <Div px={25} py={5} alignItems="center">
        <Image
          style={{
            width: 110,
            height: 110,
            marginBottom: 10,
            borderRadius: 100,
          }}
          source={logo}
        />
        <TouchableOpacity onPress={() => console.log(worker)}>
          <Text fontSize="3xl">{worker.name}</Text>
        </TouchableOpacity>
        <Text fontSize="xl">{worker.devision}</Text>
      </Div>

      <Div p={25}>
        <Text fontWeight="900" my={10}>
          Tugas
        </Text>
        <Div
          py={12}
          px={15}
          bg="#D8DEF3"
          rounded={10}
          borderWidth={1}
          borderColor="#b3b8c9"
        >
          <Div row justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">
              Total Tugas
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              {worker.tasks.length}
            </Text>
          </Div>

          <Div alignItems="center">
            <Div h={0.7} w="100%" bg="#b3b8c9" m={12}></Div>
          </Div>
          
          <Div row justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">
              Tugas Selesai
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              {worker.tasks.filter((task) => task.status !== "pending").length}
            </Text>
          </Div>

        </Div>

        <Text fontWeight="900" my={10}>
          Data Diri
        </Text>
        <Div
          py={12}
          px={15}
          bg="#D8DEF3"
          rounded={10}
          borderWidth={1}
          borderColor="#b3b8c9"
        >
          <Div row justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">
              Umur
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              {worker.age}
            </Text>
          </Div>

          <Div alignItems="center">
            <Div h={0.7} w="100%" bg="#b3b8c9" m={12}></Div>
          </Div>

          <Div row justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">
              Alamat
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              {worker.address}
            </Text>
          </Div>

          <Div alignItems="center">
            <Div h={0.7} w="100%" bg="#b3b8c9" m={12}></Div>
          </Div>

          <Div row justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">
              Jenis Kelamin
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              {worker.gender}
            </Text>
          </Div>

          <Div alignItems="center">
            <Div h={0.7} w="100%" bg="#b3b8c9" m={12}></Div>
          </Div>

          <Div row justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">
              Nomor Telepon
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              {worker.phone}
            </Text>
          </Div>

          <Div alignItems="center">
            <Div h={0.7} w="100%" bg="#b3b8c9" m={12}></Div>
          </Div>

          <Div row justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">
              Email
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              {worker.email}
            </Text>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Profile;
