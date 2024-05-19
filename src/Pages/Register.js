import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Div, Text, Icon, Input, Button, Snackbar } from "react-native-magnus";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const logo = require("./../../assets/logo.png");

const Register = ({ navigation }) => {
  const snackbarRef = React.createRef();
  const [selectedDevision, setSelectedDevision] = useState();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [devision, setDevision] = useState("");

  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const [form2, setForm2] = useState({
    name: "",
    devision: "",
  });

  useEffect(() => {
    setForm({ name, password });
  }, [name, password]);

  useEffect(() => {
    setForm2({ name, devision });
  }, [name, devision]);

  const handleSubmit = () => {
    axios
      .post("http://192.168.1.3:5000/user/worker", form)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    axios
      .post("http://192.168.1.3:5000/add", form2)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Div h="100%" bg="#F2F5FF">
      <Div mt={0} mx={20}>
        <Div alignItems="center" mt={110} mb={30}>
          <Image
            style={{ width: 50, height: 50, marginBottom: 15 }}
            source={logo}
          />

          <Text fontSize={30} fontWeight="400" color="#2E3A59">
            Daftar Menjadi Anggota
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
          onChangeText={(text) => setName(text)}
          value={name}
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
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Div bg="white" rounded={10} mb={20}>
          <Picker
            itemStyle={{ backgroundColor: "grey", color: "blue" }}
            selectedValue={selectedDevision}
            onValueChange={(itemValue) => setDevision(itemValue)}
          >
            <Picker.Item label="Pemasaran" value="pemasaran" />
            <Picker.Item label="Riset" value="riset" />
            <Picker.Item label="Produksi" value="produksi" />
            <Picker.Item label="Keuangan" value="keuangan" />
            <Picker.Item label="Hubungan Petani" value="hubungan petani" />
            <Picker.Item
              label="Hubungan Masyarakat"
              value="hubungan masyarakat"
            />
            <Picker.Item label="IT" value="it" />
          </Picker>
        </Div>

        <Button
          w="100%"
          h={50}
          rounded={100}
          bg="#008CFF"
          fontWeight="900"
          onPress={() => handleSubmit()}
        >
          Daftar
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            my={10}
            fontSize="lg"
            fontWeight="bold"
            color="#008CFF"
            textDecorLine="underline"
            textAlign="center"
          >
            Sudah Punya Akun?
          </Text>
        </TouchableOpacity>
      </Div>

      <Snackbar ref={snackbarRef} bg="red600" color="white"></Snackbar>
    </Div>
  );
};

export default Register;
