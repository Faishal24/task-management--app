import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { Div, Text, Icon, Input, Button } from "react-native-magnus";
import axios from "axios";
const logo = require("./../../assets/logo.png");

const Login = ({ navigation }) => {
  const [workers, setWorkers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const user = workers.find(
        worker => worker.name === form.name && worker.password === form.password
      );

      if (user) {
        // Jika login berhasil, fetch data dari /get menggunakan nama user
        const response = await axios.get(`http://192.168.1.5:5000/get/${user.name}`);
        const worker = response.data;

        // Menavigasi ke halaman Home dengan data worker yang ditemukan
        navigation.navigate('Home', { worker });
        console.log(worker)
      } else {
        console.log('Login gagal: Nama atau kata sandi salah');
      }
    } catch (error) {
      console.error('Error saat login:', error);
    }
  };

  const select = () => {
    worker.map
  }

  ///////////////
  // useEffect //
  ///////////////
  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await axios.get('http://192.168.1.5:5000/user/worker');
        setWorkers(response.data);
      } catch (error) {
        console.error('Error fetching workers:', error);
      }
    };

    fetchWorkers();
  }, []);

  return (
    <Div h="100%" bg="#F2F5FF">
      <Div mt={0} mx={20}>
        <Div alignItems="center" mt={100} mb={30}>
          <Image
            style={{ width: 100, height: 100, marginBottom: 30 }}
            source={logo}
          />

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
          onChangeText={(text) => handleChange("name", text)}
          value={form.name}
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
