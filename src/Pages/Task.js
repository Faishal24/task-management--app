import { useRoute } from "@react-navigation/native";
import axios from "axios";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Alert, StatusBar, TouchableOpacity } from "react-native";
import {
  Button,
  Div,
  Header,
  Icon,
  Input,
  Snackbar,
  Text,
} from "react-native-magnus";
import toCamelCase from "../../utils/camelCase";
import dateFix from "../../utils/dateFix";
import formatDate from "../../utils/formatDate";

const snackbarRef = React.createRef();
const snackbarRefWarn = React.createRef();
const snackbarRefDone = React.createRef();

const Task = ({ navigation }) => {
  const { task, worker } = useRoute().params;
  const ip = process.env.EXPO_PUBLIC_SERVER_ADDR;
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [note, setNote] = useState("");

  const pickDocument = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Izin ditolak",
        "Anda harus memberikan izin untuk mengakses galeri."
      );
      return;
    }

    let result = await DocumentPicker.getDocumentAsync();

    if (!result.canceled) {
      setSelectedDocument(result.assets[0].uri);
    }
  };

  const uploadDocument = async () => {
    if (!selectedDocument) {
      snackbarRefWarn.current.show("Pilih dokumen terlebih dahulu", {
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
      const fileType = selectedDocument.split(".").pop();

      // post catatan tambahan
      await axios.post(`${ip}/task-reports/`, {
        task_id: task.taskId,
        reported_by: worker.name,
        report_text: note,
      });

      // Image upload
      const formData = new FormData();
      formData.append("uploadFile", {
        uri: selectedDocument,
        type: `application/${fileType}`,
        name: `document.${fileType}`,
      });

      const response = await axios.post(
        `${ip}/tasks/upload/${task.taskId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

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
      setSelectedDocument(null);
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
            <Button bg="transparent" onPress={() => navigation.goBack()}>
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
          <Text fontSize="xl" color="white">
            Nama
          </Text>
          <Text fontSize={25} fontWeight="900" color="white" mb={15}>
            {toCamelCase(task.description)}
          </Text>

          <Text fontSize="xl" color="white">
            Tanggal
          </Text>
          <Text fontSize={25} fontWeight="900" color="white" mb={15}>
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

        <Div mt={10}>
          <Text fontSize="xl" color="#b3b8c9" my={10}>
            Deskripsi
          </Text>
          <Text fontSize={15} fontWeight="600" textAlign="justify">
            {task.content}
          </Text>
        </Div>

        <Div mt={0}>
          <Text fontSize="xl" color="#b3b8c9" my={10}>
            Catatan Tambahan
          </Text>
          <Input
            placeholder="Opsional"
            p={10}
            focusBorderColor="#008CFF"
            borderColor="#008CFF"
            onChangeText={(text) => setNote(text)}
            value={note}
          />
          ;
        </Div>

        <Div mt={10}>
          <Text fontSize="xl" color="#b3b8c9" mb={10}>
            File
          </Text>
          {task.status == "pending" ? (
            <TouchableOpacity onPress={pickDocument}>
              <Div
                w="100%"
                h={100}
                bg="#F2F5FF"
                rounded={20}
                alignItems="center"
                justifyContent="center"
              >
                {selectedDocument ? (
                  <Text>{selectedDocument.split("/").pop()}</Text>
                ) : (
                  <Text>Klik untuk unggah file sebagai bukti</Text>
                )}
              </Div>
            </TouchableOpacity>
          ) : (
            <Div
              w="100%"
              h={100}
              bg="#F2F5FF"
              rounded={20}
              alignItems="center"
              justifyContent="center"
            >
              <Text>Berkas tugas sudah diserahkan</Text>
            </Div>
          )}
          <Button
            mt={20}
            w="100%"
            h={50}
            rounded={100}
            bg={task.status == "pending" ? "#008CFF" : "gray400"}
            color={task.status == "pending" ? "white" : "gray700"}
            fontWeight="900"
            onPress={
              task.status == "pending"
                ? uploadDocument
                : () =>
                    snackbarRefDone.current.show("Tugas sudah selesai", {
                      duration: 2000,
                      suffix: (
                        <Icon
                          name="checkcircle"
                          color="white"
                          fontSize="md"
                          fontFamily="AntDesign"
                        />
                      ),
                    })
            }
          >
            {task.status == "pending"
              ? "Submit Tugas"
              : task.status == "submitted"
              ? "Tugas Diserahkan"
              : "Tugas Selesai"}
          </Button>
        </Div>
      </Div>
      <Snackbar
        ref={snackbarRefWarn}
        bg="red600"
        color="white"
        mx={20}
      ></Snackbar>
      <Snackbar
        ref={snackbarRef}
        bg="green600"
        color="white"
        mx={20}
      ></Snackbar>
      <Snackbar
        ref={snackbarRefDone}
        bg="#008CFF"
        color="white"
        mx={20}
      ></Snackbar>
    </Div>
  );
};

export default Task;
