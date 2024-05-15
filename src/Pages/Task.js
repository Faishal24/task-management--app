import React from "react";
import { useRoute } from "@react-navigation/native";
import { Div, Text, Icon, Header, Button } from "react-native-magnus";
import { StatusBar } from "react-native";
import formatDate from "../../utils/dateFix"

const Task = () => {
  const {task} = useRoute().params
  return (
    <Div>
      <StatusBar barStyle="dark-content" backgroundColor="#008CFF" />
      <Div bg="#008CFF">
        <Header
          p="lg"
          alignment="center"
          shadow={0}
          color="white"
          bg="#008CFF"
          prefix={
            <Button bg="transparent">
              <Icon
                name="arrow-back"
                fontFamily="Ionicons"
                fontSize={25}
                color="white"
              />
            </Button>
          }
        >
          Detail Tugas
        </Header>

        {/* Atas */}
        <Div px={25}>
          <Text fontSize="xl" color="white" my={10}>
            Nama
          </Text>
          <Text fontSize={25} fontWeight="900" color="white" mb={25}>
            {task.description}
          </Text>

          <Text fontSize="xl" color="white" my={10}>
            Tanggal
          </Text>
          <Text fontSize={25} fontWeight="900" color="white" mb={35}>
            {task.dueTo}
          </Text>
        </Div>
      </Div>
      {/* Bawah */}
      <Div p={25} bg="white" h="100%">
        <Div row justifyContent="space-between">
          <Div>
            <Text fontSize="xl" color="#b3b8c9" mb={10}>
              Tugas Dibuat
            </Text>
            <Text fontSize={25} fontWeight="900" color="#2E3A59">
              {formatDate(task.createdAt)}
            </Text>
          </Div>

          <Div>
            <Text fontSize="xl" color="#b3b8c9" mb={10}>
              Batas Tugas
            </Text>
            <Text fontSize={25} fontWeight="900" color="#2E3A59">
              {task.dueTo}
            </Text>
          </Div>
        </Div>

        <Div mt={15}>
          <Text fontSize="xl" color="#b3b8c9" my={10}>
            Deskripsi
          </Text>
          <Text fontSize={15} fontWeight="600" textAlign="justify">
            {task.content}
          </Text>
        </Div>

        <Div mt={25}>
          <Text fontSize="xl" color="#b3b8c9" mb={10}>
            File
          </Text>
          <Div
            w="100%"
            h={100}
            bg="#F2F5FF"
            rounded={20}
            alignItems="center"
            justifyContent="center"
          >
            <Text>Klik untuk unggah file sebagai bukti</Text>
          </Div>
          <Button mt={20} w="100%" h={50} rounded={100} bg="#008CFF" fontWeight="900">
            Unggah File
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default Task;
