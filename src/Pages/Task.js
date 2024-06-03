import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Div, Text, Icon, Header, Button, Snackbar } from "react-native-magnus";
import { StatusBar, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import dateFix from "../../utils/dateFix";
import formatDate from "../../utils/formatDate";
import axios from "axios";

const snackbarRef = React.createRef();

const Task = () => {
  const { task } = useRoute().params;
  const [selectedImage, setSelectedImage] = useState(null);
  const ip = process.env.EXPO_PUBLIC_SERVER_ADDR

  const pickImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Izin ditolak",
        "Anda harus memberikan izin untuk mengakses galeri."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      snackbarRef.current.show("Pilih gambar terlebih dahulu", {
        duration: 2000,
        suffix: (
          <Icon
            name="closecircle"
            color="white"
            fontSize="md"
            fontFamily="AntDesign"
          />
        ),
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("uploadFile", {
        uri: selectedImage,
        type: "image/jpeg", // adjust according to the image type
        name: "image.jpg",
      });

      const response = await axios.put(
        `http://${ip}/tasks/${task.taskId}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload successful:", response.data.message);
      snackbarRef.current.show("Unggah file berhasil", {
        duration: 2000,
        suffix: (
          <Icon
            name="checkcircle"
            color="white"
            fontSize="md"
            fontFamily="AntDesign"
          />
        ),
      });
      setSelectedImage(null);
    } catch (error) {
      console.error("Error uploading image", error);
      Alert.alert("Error", "Gagal mengunggah gambar");
    }
  };

  return (
    <Div h="100%">
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
            {formatDate(task.dueTo)}
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
              {dateFix(task.createdAt)}
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
          <TouchableOpacity onPress={pickImage}>
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
          </TouchableOpacity>
          <Button
            mt={20}
            w="100%"
            h={50}
            rounded={100}
            bg="#008CFF"
            fontWeight="900"
            onPress={uploadImage}
          >
            Unggah File
          </Button>
        </Div>
      </Div>
      <Snackbar ref={snackbarRef} bg="blue600" color="white" mx={20}></Snackbar>
    </Div>
  );
};

export default Task;
