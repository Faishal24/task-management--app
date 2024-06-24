import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Div,
  Text,
  Icon,
  Input,
  Button,
  Snackbar,
  SnackbarRef,
} from "react-native-magnus";
import axios from "axios";
const logo = require("./../../assets/logo.png");

const snackbarRef = React.createRef();

const Login = ({ navigation }) => {
  const ip = process.env.EXPO_PUBLIC_SERVER_ADDR;
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [workers, setWorkers] = useState([]);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlePasswordVisibility = () => {
    setPasswordHidden(!passwordHidden);
  };

  const handleLogin = async () => {
    try {
      const user = workers.find(
        (worker) =>
          worker.email === form.email && worker.password === form.password
      );

      if (user) {
        // Jika login berhasil, fetch data dari /get menggunakan nama user
        const response = await axios.get(`https://${ip}/get/${user.email}`);
        const worker = response.data;

        // Menavigasi ke halaman Home dengan data worker yang ditemukan
        navigation.navigate("Template", { worker });
        console.log(worker);
      } else {
        if (snackbarRef.current) {
          snackbarRef.current.show("Nama atau kata sandi salah", {
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
        }
      }
    } catch (error) {
      console.error("Error saat login:", error);
    }
  };

  ///////////////
  // useEffect //
  ///////////////
  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await axios.get(`https://${ip}/user/worker`);
        setWorkers(response.data);
      } catch (error) {
        console.error("Error fetching workers:", error);
      }
    };

    fetchWorkers();
  }, []);

  return (
    <Div h="100%" bg="#F2F5FF">
      <Div mt={0} mx={20}>
        <Div alignItems="center" mt={110} mb={30}>
          <Image
            style={{ width: 100, height: 100, marginBottom: 30 }}
            source={logo}
          />

          <Text fontSize={30} fontWeight="400" color="#2E3A59">
            Selamat Datang
          </Text>
          <Text fontSize={30} fontWeight="400">
            di{" "}
            <Text fontSize={35} color="#008CFF" fontWeight="900">
              TManage
            </Text>
          </Text>
        </Div>

        <Input
          placeholder="Email"
          p={10}
          focusBorderColor="#008CFF"
          prefix={
            <Icon
              name="mail"
              color="gray900"
              fontFamily="Feather"
              fontSize={17}
            />
          }
          borderColor="#F2F5FF"
          rounded={10}
          mb={20}
          onChangeText={(text) => handleChange("email", text)}
          value={form.email}
        />
        <Input
          placeholder="Kata Sandi"
          p={10}
          focusBorderColor="#008CFF"
          secureTextEntry={passwordHidden}
          prefix={
            <Icon
              name="form-textbox-password"
              color="gray900"
              fontFamily="MaterialCommunityIcons"
              fontSize={17}
            />
          }
          suffix={
            passwordHidden ? (
              <TouchableOpacity onPress={handlePasswordVisibility}>
                <Icon name="eye" color="gray900" fontFamily="Feather" fontSize={17}/>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handlePasswordVisibility}>
                <Icon name="eye-off" color="gray900" fontFamily="Feather" fontSize={17}/>
              </TouchableOpacity>
            )
          }
          borderColor="#F2F5FF"
          rounded={10}
          mb={20}
          onChangeText={(text) => handleChange("password", text)}
          value={form.password}
        />
        <Button
          w="100%"
          h={50}
          rounded={100}
          bg="#008CFF"
          fontWeight="900"
          onPress={() => handleLogin()}
        >
          Masuk
        </Button>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            my={10}
            fontSize="lg"
            fontWeight="bold"
            color="#008CFF"
            textDecorLine="underline"
            textAlign="center"
          >
            Belum Punya Akun?
          </Text>
        </TouchableOpacity>
      </Div>

      <Snackbar ref={snackbarRef} bg="red600" color="white" w="90%"></Snackbar>
    </Div>
  );
};

export default Login;
