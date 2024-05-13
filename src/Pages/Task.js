import React from "react";
import { Div, Text, Icon, Header, Button } from "react-native-magnus";
import { StatusBar } from "react-native";

const Task = () => {
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
            Memeriksa Laporan Pajak
          </Text>

          <Text fontSize="xl" color="white" my={10}>
            Tanggal
          </Text>
          <Text fontSize={25} fontWeight="900" color="white" mb={35}>
            13 Mei 2099
          </Text>
        </Div>
      </Div>
      {/* Bawah */}
      <Div p={25} bg="white">
        <Div row justifyContent="space-between">
          <Div>
            <Text fontSize="xl" color="#b3b8c9" mb={10}>
              Tugas Dibuat
            </Text>
            <Text fontSize={25} fontWeight="900" color="#2E3A59">
              06 Mei 2099
            </Text>
          </Div>

          <Div>
            <Text fontSize="xl" color="#b3b8c9" mb={10}>
              Tugas Dibuat
            </Text>
            <Text fontSize={25} fontWeight="900" color="#2E3A59">
              09 Mei 2099
            </Text>
          </Div>
        </Div>

        <Div mt={30}>
          <Text fontSize="xl" color="#b3b8c9" m={10}>
            Deskripsi
          </Text>
          <Text fontSize={15} fontWeight="600" textAlign="justify">
            Memeriksa laporan pajak tahunan untuk memastikan kepatuhan
            perpajakan yang tepat waktu serta menjamin keakuratan dan
            kelengkapan dokumen yang terkait.
          </Text>
        </Div>

        <Div mt={30}>
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
